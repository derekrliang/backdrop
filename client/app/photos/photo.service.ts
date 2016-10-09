import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppConstants } from '../app.constants';

import { Photo } from './photo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {
    private photosUrl = '/api/photos';

    constructor(private http: Http) {}

    getPhotosStatic() {
        return [{url: 'test1'}];
    }

    getPhotos(): Observable<Photo[]> {
        return this.http.get(this.photosUrl)
            .map(this.transformToJson)
			.catch(this.handleError);
    }

	private transformToJson(res: Response) {
    	return res.json() || { };
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}