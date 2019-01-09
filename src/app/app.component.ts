import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from "./decorators/local-storage.decorator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @LocalStorage yasminLocalisation: string;
  title = 'yasmin-company';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.yasminLocalisation || 'en');
  }
}
