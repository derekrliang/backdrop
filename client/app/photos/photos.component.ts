import { Component, Input } from '@angular/core';

import { Photo } from './photo';

@Component({
    selector: 'photos',
    template: `
    <h2>Photos</h2>
    <photo-list></photo-list>
    `
})
export class PhotosComponent { }