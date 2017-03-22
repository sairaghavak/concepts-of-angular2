import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule, conceptsRoutingComponents } from './concepts-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  declarations: [conceptsRoutingComponents]
})
export class ConceptsModule {
  constructor() {
    console.log('ConceptsModule has jut been lazy loaded..., this message will be displayed twice(that\'s a bug in angular2).');
  }
}
