import { Component, Input } from '@angular/core';

import { Photo } from './photo';
import { PhotoService } from './photo.service';

@Component({
    selector: 'photo-list',
    providers: [PhotoService],
    template: `
	{{errorMessage}}
    <div *ngFor="let photo of photos">
		<img src="{{photo.image_url}}">
    </div>`
})
export class PhotoListComponent {
    errorMessage: string;
    photos: Photo[];

    constructor(private PhotoService: PhotoService) { }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.PhotoService.getPhotos()
        .subscribe(
    		photos => this.photos = photos,
        	error => this.errorMessage = <any>error
        );
    }

}