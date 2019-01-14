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
import {DeviceDetectorModule} from 'ngx-device-detector';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    BrowserModule,
    DeviceDetectorModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
