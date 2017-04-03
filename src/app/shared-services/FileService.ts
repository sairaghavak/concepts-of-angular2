import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // Observable doesn't have a map operator so importing it.

@Injectable()
export class FileService {
    /**
     * 
     * @param _http 
     */
    constructor(private _http: Http) { }

    /**
     * @param url 
     * @returns returns the file as Observable of type string
     */
    getFile(url: string): Observable<string> {
        return this._http.get(url).map(res => res.text());
    }
}
