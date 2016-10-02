import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {
    private photosUrl = '/photos';

    constructor(private http: Http) {}

    getPhotos() {
        return [{uri: 'test1'}];
    }

    get() {
        return this
			.http
            .get(this.photosUrl)
            .map((response: Response) => response.json());
    }
}