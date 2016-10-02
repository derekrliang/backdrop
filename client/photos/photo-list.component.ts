import { Component, Input } from '@angular/core';

import { PhotoService } from './photo.service';

@Component({
    selector: 'photo-list',
    providers: [PhotoService],
    template: `
    <div *ngFor="let photo of photos">
        {{photo}}
    </div>`
})
export class PhotoListComponent { }