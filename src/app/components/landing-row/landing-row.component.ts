import {Component, Input, OnInit} from '@angular/core';
import {ELandingRowPosition, ELandingRowType} from '../../config/enum/ELandingRow';

@Component({
  selector: 'app-landing-row',
  templateUrl: './landing-row.component.html',
  styleUrls: ['./landing-row.component.scss']
})
export class LandingRowComponent implements OnInit {

  // @Input() type: ELandingRowType;
  // @Input() position: ELandingRowPosition;
  // @Input() text: any;
  // @Input() title: string;
  // @Input() image: string;

  @Input() row: any;
  @Input() top: boolean;
  @Input() bottom: boolean;

  constructor() { }

  ngOnInit() {
  }

}
