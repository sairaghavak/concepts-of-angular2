import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule, CONCEPTS_ROUTING_COMPONENTS } from './concepts-routing.module';

import { FileService } from '../shared-services/FileService';
import { Constants } from '../shared-services/constants';

import { TrustedHtmlPipe } from './pipes/trusted-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  declarations: [CONCEPTS_ROUTING_COMPONENTS, TrustedHtmlPipe],
  providers: [Constants, FileService]
})
export class ConceptsModule { }
