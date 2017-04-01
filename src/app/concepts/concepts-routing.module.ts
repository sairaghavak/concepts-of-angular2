import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules/modules.component';
import { ComponentsComponent } from './components/components.component';
import { TemplatesComponent } from './templates/templates.component';
import { MetadataComponent } from './metadata/metadata.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

import { ConceptNotFoundComponent } from './concept-not-found.component';

const conceptsRoutes: Routes = [
    { path: 'modules', component: ModulesComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'metadata', component: MetadataComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'dependency-injection', component: DependencyInjectionComponent },
    { path: '**', component: ConceptNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(conceptsRoutes)],
    exports: [RouterModule]
})
export class ConceptsRoutingModule { }
export const CONCEPTS_ROUTING_COMPONENTS = [ModulesComponent, ComponentsComponent, TemplatesComponent, MetadataComponent, DataBindingComponent, DirectivesComponent, ServicesComponent, DependencyInjectionComponent, ConceptNotFoundComponent];
