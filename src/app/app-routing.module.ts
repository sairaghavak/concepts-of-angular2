import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';


const appRoutes: Routes = [
    /* Note that the sequence of routing is important*/
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'concepts', loadChildren: './concepts/concepts.module#ConceptsModule' }, // I prefer this way of loading module
    // { path: 'home', loadChildren: () => ConceptsModule }, // This is other way of loading module rquires import at top of this file
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents = [HomeComponent, PageNotFoundComponent];
