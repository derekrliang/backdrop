import { Component, Input } from '@angular/core';

import { Photo } from './photo';
import { PhotoService } from './photo.service';

@Component({
    selector: 'photos',
    providers: [PhotoService],
    template: `
    <h2>Photos</h2>
    <photo-list></photo-list>
    `
})
export class PhotosComponent {
    photos: Photo[];

    constructor(private Photo: PhotoService) {
        this.photos = Photo.getPhotos();
    }
}