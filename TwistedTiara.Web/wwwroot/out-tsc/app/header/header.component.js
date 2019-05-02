import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.initialize();
    };
    HeaderComponent.prototype.initialize = function () {
        var $window = $(window);
        var $head = $('head');
        var $body = $('body');
        // Dropdowns.
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            alignment: 'center'
        });
        // Nav.
        // Title Bar.
        $('<div id="titleBar">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>')
            .appendTo($body);
        // Panel.
        $('<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>')
            .appendTo($body)
            .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'tt-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map