import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-row',
  templateUrl: './landing-row.component.html',
  styleUrls: ['./landing-row.component.scss']
})
export class LandingRowComponent implements OnInit {

  @Input() row: any;
  @Input() top: boolean;
  @Input() bottom: boolean;
  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event) {
    if (event.keyCode === 38) {
      this.scrollTo(-1);
    } else if (event.keyCode === 40) {
      this.scrollTo(1);
    }
  }

  scrollTo(num) {
    const currentPosition = window.pageYOffset;
    const counts = currentPosition / window.innerHeight ? Math.round(currentPosition / window.innerHeight) : 1;
    const rounding = window.innerHeight - (window.innerHeight % 100);

    let currentRow = counts * window.innerHeight;
    if (num < 0) {currentRow -= window.innerHeight * (counts - 1);}

    function scrolling(i) {window.scrollTo(0, currentPosition + currentRow / (rounding / i))}

    for (let i = 0; i <= rounding; i += rounding / 50) {
      setTimeout(() => scrolling(num > 0 ? i : -i), i);
    }
  }
}
