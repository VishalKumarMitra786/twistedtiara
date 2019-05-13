import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionsComponent } from 'src/app/sections/sections.component';
import { AdminComponent } from './admin/admin.component';
var routes = [
    {
        path: 'home',
        component: SectionsComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/admin',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map