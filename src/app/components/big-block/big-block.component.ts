import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-block',
  templateUrl: './big-block.component.html',
  styleUrls: ['./big-block.component.scss']
})
export class BigBlockComponent implements OnInit {
  innerHeight: number;

  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }

}
