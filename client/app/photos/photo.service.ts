import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Photo } from './photo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {
    private photosUrl = '/photos';

    constructor(private http: Http) {}

    getPhotosStatic() {
        return [{url: 'test1'}];
    }

    getPhotos(): Observable<Photo[]> {
        return this.http.get(this.photosUrl)
            .map(this.extractData)
			.catch(this.handleError);
    }

	private extractData(res: Response) {
    	let body = res.json();
    	return body.data || { };
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}