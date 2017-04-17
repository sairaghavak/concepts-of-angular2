import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConceptsRoutingModule, CONCEPTS_ROUTING_COMPONENTS } from './concepts-routing.module';

import { FileService } from '../shared-services/FileService';


import { TrustedHtmlPipe } from './pipes/trusted-html.pipe';
import { MyNameDirective } from './directives/my-name.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConceptsRoutingModule
  ],
  declarations: [CONCEPTS_ROUTING_COMPONENTS, TrustedHtmlPipe, MyNameDirective],
  providers: [FileService]
})
export class ConceptsModule { }
