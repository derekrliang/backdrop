import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { Photo } from './photo';

@Component({
    selector: 'photo',
    template: `
    <div>
		<img src="{{photo.image_url}}">
    </div>`
})

export class PhotoComponent {
    private resolvedTransaction: any = this.route.snapshot.data['photo'];
    photo: Photo;
    errorMessage: string;

    constructor(private route: ActivatedRoute) {
        this.photo = this.resolvedTransaction;
    }
}