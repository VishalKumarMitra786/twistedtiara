import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SocialLoginModule, AuthServiceConfig } from "angular-6-social-login";
import { getAuthServiceConfigs } from './auth/auth-config';
import { AppService } from './services/app.service';
import { AdminModule } from './admin/admin.module';
// Configs 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent,
                SectionsComponent,
                BannerComponent,
                AuthComponent
            ],
            imports: [
                BrowserAnimationsModule,
                BrowserModule,
                HttpClientModule,
                AppRoutingModule,
                SlideshowModule,
                SocialLoginModule,
                AdminModule
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map