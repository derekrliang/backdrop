import { Component, Input } from '@angular/core';

@Component({
    selector: 'home',
    template: `
    <h1>Home</h1>
    <a routerLink="/photos" routerLinkActive="active">Photos</a>
    `
})
export class HomeComponent {}