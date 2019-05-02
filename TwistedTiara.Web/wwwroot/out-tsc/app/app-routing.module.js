import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/auth/auth.component';
import { SectionsComponent } from 'src/app/sections/sections.component';
var routes = [
    {
        path: 'home',
        component: SectionsComponent
    },
    {
        path: 'signin',
        component: AuthComponent
    },
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/signin',
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