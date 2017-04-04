<pre>
/*
 * A simple default Angular module.
 * 
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-02 08:11:13 
 * @Last Modified by: Sai Raghava Katepally 
 * @Last Modified time: 2017-04-02 08:11:13 
 */
import { BrowserModule } from '@angular/platform-browser'; // BrowserModule internally exports CommonModule from @angular/common that has access to angular directives like NgIf and NgFor.
import { NgModule } from '@angular/core'; // Required by @NgModule decorator.
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'; // A component named AppComponent in this module.

// Tags the Angular class as a module thereby providing more details with properties like declarations, imports, providers and Bootstrap etc.
@NgModule({
    declarations: [ // All the View Components of this module are placed here.
        AppComponent
    ],
    imports: [ // Imports has got all the dependency modules.
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [], // All the services that are required for this module are included here.
    bootstrap: [AppComponent]  // The View Component that has a reference in index.html.
})
export class AppModule { } // An empty typescript class, most of the times, an angular module is empty as the details are provided in @NgModule decorator.
</pre>