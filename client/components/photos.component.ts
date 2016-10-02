import { Component, Input } from '@angular/core';

@Component({
    selector: 'photos',
    template: `<div>{{photos}}</div>`
})

export class PhotoComponent {

    constructor(private Photo: PhotoService) {
        this.photos = Photo.get();
    }
}