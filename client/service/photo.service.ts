import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {

    constructor(private http: Http) {}

    get() {
        return this
			.http
            .get('/photos')
            .map((response: Response) => response.json());
    }
}