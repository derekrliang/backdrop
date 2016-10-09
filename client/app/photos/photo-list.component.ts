import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Photo } from './photo';
import { PhotoService } from './photo.service';

@Component({
    selector: 'photo-list',
    providers: [PhotoService],
    styles: [`
        .bd-photo {
            display: inline-block;
            cursor: pointer;
        }
    `],
    template: `
	{{errorMessage}}
    <div class="bd-photo" *ngFor="let photo of photos"
        (click)="onSelect(photo)">
		<img src="{{photo.image_url}}">
    </div>`
})
export class PhotoListComponent {
    errorMessage: string;
    photos: Photo[];

    constructor(
        private PhotoService: PhotoService,
        private router: Router) { }

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

    onSelect(photo: Photo) {
        this.router.navigate(['/photo', photo.id]);
    }

}