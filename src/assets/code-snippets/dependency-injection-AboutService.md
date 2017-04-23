<pre class="prettyprint">
/*
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-23 19:07:17 
 * @Last Modified by: Sai Raghava Katepally
 * @Last Modified time: 2017-04-23 19:13:11
 */
import { Injectable } from '@angular/core';
import { AddressService } from './address.service';

@Injectable() // Remove this and experience the error to understand its importance.
export class AboutService {

    constructor(private _addressService: AddressService) { }

    getAbout() {
        return "This is about service.... and the user's address is " + this._addressService.getAddress();
    }

}
</pre>