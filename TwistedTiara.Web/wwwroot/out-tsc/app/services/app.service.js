import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.display = function (bearerToken) {
        var headers = new HttpHeaders();
        headers.append('Authorization', bearerToken);
        this.http.get('https://localhost:44385/account/display', { headers: headers }).toPromise().then(function (res) {
            console.log(res);
        }).catch(function (err) { return console.error(err); });
    };
    AppService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map