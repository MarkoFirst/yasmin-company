import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../../decorators/local-storage.decorator';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @LocalStorage yasminLocalisation: string;
  changeLocalisation = false;

  constructor() { }

  ngOnInit() {
  }
  showLocalisationAlert() {
    this.changeLocalisation = true;
  }

  changeLocalise(event) {
    this.yasminLocalisation = String(event.target.alt || 'en');
    this.changeLocalisation = false;
    window.location.reload();
  }

}
