import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PhotosComponent } from '../photos/photos.component';
import { PhotoListComponent } from '../photos/photo-list.component';
import { PhotoService } from '../photos/photo.service';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		PhotosComponent,
		PhotoListComponent
	],
	providers: [
		PhotoService
		//{ provide: APP_CONFIG, useValue: PHOTO_DI_CONFIG }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }