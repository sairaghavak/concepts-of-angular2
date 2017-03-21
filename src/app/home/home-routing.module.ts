import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    /* Here are the routes defined for Home feature module, how this module is loaded has been defined 
    in the app-routing.module.ts */
    { path: '', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
export const homeRoutingComponents = [HomeComponent];
