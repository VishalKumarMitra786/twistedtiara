import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { AppService } from '../services/app.service';
var AuthComponent = /** @class */ (function () {
    function AuthComponent(socialAuthService, appService) {
        this.socialAuthService = socialAuthService;
        this.appService = appService;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.display('Bearer ' + userData.idToken);
            // Now sign-in with userData
            // ...
        });
    };
    AuthComponent.prototype.display = function (tokenId) {
        this.appService.display(tokenId);
    };
    AuthComponent = tslib_1.__decorate([
        Component({
            selector: 'tt-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            AppService])
    ], AuthComponent);
    return AuthComponent;
}());
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map