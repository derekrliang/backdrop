import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photos/photo-list.component';
import { PhotoService } from './photos/photo.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		PhotosComponent,
		PhotoListComponent
	],
	providers: [
		PhotoService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }