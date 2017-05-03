<pre class="prettyprint">
/*
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-23 19:10:49 
 * @Last Modified by: Sai Raghava Katepally
 * @Last Modified time: 2017-04-23 19:12:24
 */
import { Injectable } from '@angular/core';

@Injectable() // Here it is optional, as the this class is not dependent on any other.
export class AddressService {

    constructor() { }

    getAddress() {
        return "In AddressService.getAddress(), user's address is => India -> Telangana -> Hyderabad";
    }

}
</pre>