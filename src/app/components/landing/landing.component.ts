import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {LANDINGS_DATA} from '../../config/constants/landingsData';
import {LandingRowComponent} from '../landing-row/landing-row.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild(LandingRowComponent) child: LandingRowComponent;
  landingsData: any;
  currentLanding$: Observable<any[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.landingsData = LANDINGS_DATA;
    this.currentLanding$ = this.route.paramMap
      .pipe(map(name => this.landingsData[name.get('name')]));
  }
}
