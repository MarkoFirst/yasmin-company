import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import {LANDINGS_DATA} from '../../config/constants/landingsData';
import {LandingRowComponent} from '../landing-row/landing-row.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild(LandingRowComponent) child: LandingRowComponent;
  currentLanding: any;
  landingsData: any;
  private scroll = new Subject();
  private subscription: Subscription;
  private trigger = true;

  private onDestroyStream$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.landingsData = LANDINGS_DATA;
    this.route.paramMap
      .pipe(takeUntil(this.onDestroyStream$))
      .subscribe(name => this.currentLanding = this.landingsData[name.get('name')]);

    this.subscription = this.scroll
      .pipe(debounceTime(50))
      .subscribe((e: boolean) => this.trigger = e);
  }

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event) {
    event.preventDefault();
    event.stopPropagation();

    this.scroll.next(true);
    if (!this.trigger) { return; }

    this.child.scrollTo(event.wheelDeltaY > 0 ? -1 : 1);
    this.trigger = false;
  }
}
