import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigBlockComponent } from './components/big-block/big-block.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRowComponent } from './components/landing-row/landing-row.component';
import { LogoComponent } from './share/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BigBlockComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    LandingRowComponent,
    LogoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
