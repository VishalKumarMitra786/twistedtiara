import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.images = new Array();
    }
    BannerComponent.prototype.ngOnInit = function () {
        var image1 = {
            url: './images/pic10.jpg',
            caption: 'Women Empowerment'
        };
        var image2 = {
            url: './images/pic03.jpg',
            caption: 'Super Girl'
        };
        var image3 = {
            url: './images/pic01.jpg',
            caption: 'Beauty & Elegance'
        };
        this.images.push(image1);
        this.images.push(image2);
        this.images.push(image3);
    };
    BannerComponent = tslib_1.__decorate([
        Component({
            selector: 'tt-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());
export { BannerComponent };
//# sourceMappingURL=banner.component.js.map