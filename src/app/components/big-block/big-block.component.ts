import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {LINKS} from '../../config/constants/homeLinks';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil, debounceTime} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-big-block',
  templateUrl: './big-block.component.html',
  styleUrls: ['./big-block.component.scss']
})
export class BigBlockComponent implements OnInit, OnDestroy {
  innerHeight: number;
  links = LINKS;
  currentLink: any;
  private onDestroyStream$ = new Subject<void>();
  private scroll = new Subject();
  private subscription: Subscription;
  private trigger = true;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;

    this.route.paramMap
      .pipe(takeUntil(this.onDestroyStream$))
      .subscribe(name => {
        this.currentLink = this.links.find(item => name.get('name') === item.link);
      });

    this.subscription = this.scroll
      .pipe(debounceTime(40))
      .subscribe((e: boolean) => this.trigger = e);
  }

  ngOnDestroy(): void {
    this.onDestroyStream$.next();
    this.onDestroyStream$.complete();
  }

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    this.scroll.next(true);

    if (!this.trigger) { return; }

    this.navigateTo(event.wheelDelta > 0 ? -1 : 1);
    this.trigger = false;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event) {
    if (event.keyCode === 38) {
      this.navigateTo(-1);
    } else if (event.keyCode === 40) {
      this.navigateTo(1);
    }
  }

  navigateTo(number) {
    let linkIndex = this.links.findIndex(item => item === this.currentLink);

    if (linkIndex === this.links.length - 1 && number === 1) {
      linkIndex = -1;
    } else if (linkIndex === 0 && number === -1) {
      linkIndex = this.links.length;
    }

    const link = this.links[linkIndex + number].link;

    this.router.navigate(['/home/' + link]);
  }
}
