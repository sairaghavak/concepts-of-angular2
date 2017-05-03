<pre class="prettyprint">
/*
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-23 17:22:39 
 * @Last Modified by: Sai Raghava Katepally
 * @Last Modified time: 2017-04-23 17:28:53
 */
import { Component } from '@angular/core';
import { AddressService } from './address.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    addressService: AddressService;

    constructor() {
        this.addressService = new AddressService(); // Ideally, this task must be delegated to Angular2 Dependency Injector
        this.getAddress();
    }

    getAddress() {
        return this.addressService.getAddress();
    }

}
</pre>