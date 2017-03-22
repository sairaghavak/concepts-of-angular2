import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ComponentsComponent } from './components.component';
import { ConceptNotFoundComponent } from './concept-not-found.component';

const conceptsRoutes: Routes = [
    { path: 'modules', component: ModulesComponent },
    { path: 'components', component: ComponentsComponent },
    { path: '**', component: ConceptNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(conceptsRoutes)],
    exports: [RouterModule]
})
export class ConceptsRoutingModule { }
export const conceptsRoutingComponents = [ModulesComponent, ComponentsComponent, ConceptNotFoundComponent];
