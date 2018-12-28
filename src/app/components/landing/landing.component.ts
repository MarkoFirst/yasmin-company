import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {LANDINGS_DATA} from '../../config/constants/landingsData';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  currentLanding: any;
  landingsData: any;

  private onDestroyStream$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.landingsData = LANDINGS_DATA;
    this.route.paramMap
      .pipe(takeUntil(this.onDestroyStream$))
      .subscribe(name => this.currentLanding = this.landingsData[name.get('name')]);
  }

}
