import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
var routes = [{
        path: '',
        component: AdminComponent,
        children: [],
    }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
export { AdminRoutingModule };
//# sourceMappingURL=admin.routing.module.js.map