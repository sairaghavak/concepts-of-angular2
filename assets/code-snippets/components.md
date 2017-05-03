<pre class="prettyprint">
/*
 * Basic example of Angular Component.
 * 
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-03 20:01:36 
 * @Last Modified by: Sai Raghava Katepally
 * @Last Modified time: 2017-04-03 20:19:40
 */
import { Component } from '@angular/core'; // required for @Component decorator

@Component({
    selector: 'app-root', // a tag reference in other html templates to call this component template
    templateUrl: './app.component.html', // a html file that can use this component properties and can perform actions like button click, form submit etc.
    styleUrls: ['./app.component.css'] // external styles for the html file referenced in templateUrl.
})
export class AppComponent { // A typescript class, which is instantiated in Modules declarations property.
    title = 'Concepts of Angular2!';
}

</pre>