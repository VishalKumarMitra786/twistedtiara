import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsComponent } from './sections/sections.component';
import { BannerComponent } from './sections/banner/banner.component';
import { AppRoutingModule } from './/app-routing.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AuthComponent } from './auth/auth.component';
import {
  SocialLoginModule,
  GoogleLoginProvider,
  AuthServiceConfig
} from "angular-6-social-login";
import { getAuthServiceConfigs } from './auth/auth-config';
import { AppService } from './services/app.service';

// Configs 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionsComponent,
    BannerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlideshowModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
