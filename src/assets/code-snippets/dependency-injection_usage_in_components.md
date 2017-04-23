<pre class="prettyprint">
/*
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-23 19:19:43 
 * @Last Modified by: Sai Raghava Katepally 
 * @Last Modified time: 2017-04-23 19:19:43 
 */
import { Component } from '@angular/core';
import { AboutService } from './about.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private _aboutService: AboutService) {
        this.tellmelittleAboutUser();
    }

    tellmelittleAboutUser() {
        return this._aboutService.showAbout();
    }

}
</pre>