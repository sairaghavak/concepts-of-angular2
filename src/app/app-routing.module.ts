import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
//import { HomeModule } from './home/home.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { ContentComponent } from './content/content.component'

const appRoutes: Routes = [
    /* Note that the sequence of routing is important*/
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: ContentComponent },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },// I prefer this way of loading module
    //{ path: 'home', loadChildren: () => HomeModule },// This is other way of loading module rquires import at top of this file
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents = [PageNotFoundComponent, ContentComponent];
