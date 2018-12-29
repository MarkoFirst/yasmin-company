import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import {LANDINGS_DATA} from '../../config/constants/landingsData';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  currentLanding: any;
  landingsData: any;
  private scroll = new Subject();
  private subscription: Subscription;
  currentRow: number = 1;

  private onDestroyStream$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.landingsData = LANDINGS_DATA;
    this.route.paramMap
      .pipe(takeUntil(this.onDestroyStream$))
      .subscribe(name => this.currentLanding = this.landingsData[name.get('name')]);

    this.subscription = this.scroll
      .pipe(debounceTime(50))
      .subscribe(this.scrollTo);
  }

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    // this.scroll.next(event.clientX);
  }

  scrollTo(add) {
    if (add > 700) {
      this.currentRow += 1;
      window.scrollTo(0,window.innerHeight * this.currentRow)
    } else if (add < -700) {
      this.currentRow -= 1;
      window.scrollTo(window.innerHeight * this.currentRow, 0)
    }
  }
}
