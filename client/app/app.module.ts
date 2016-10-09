import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photos/photo-list.component';
import { PhotoService } from './photos/photo.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot([ // https://angular.io/docs/ts/latest/guide/router.html
			{ path: 'photos', component: PhotoListComponent },
			{ path: '', component: HomeComponent },
			{ path: '**', component: PageNotFoundComponent }
		])
	],
	declarations: [
		AppComponent,
		HomeComponent,
		PageNotFoundComponent,
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