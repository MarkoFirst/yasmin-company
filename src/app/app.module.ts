import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigBlockComponent } from './components/big-block/big-block.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BigBlockComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
