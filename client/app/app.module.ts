import { NgModule, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Photo } from './photos/photo';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo.component';
import { PhotoListComponent } from './photos/photo-list.component';
import { PhotoService } from './photos/photo.service';

@Injectable()
class PhotoResolver implements Resolve<Photo> {
	constructor(private photoService: PhotoService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> {
		return this.photoService.getPhoto(route.params['photoId']);
	}
}

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot([ // https://angular.io/docs/ts/latest/guide/router.html
			{ path: 'photos', component: PhotoListComponent },
			{ path: 'photo/:photoId', component: PhotoComponent, resolve: { photo: PhotoResolver } },
			{ path: '', component: HomeComponent },
			{ path: '**', component: PageNotFoundComponent }
		])
	],
	declarations: [
		AppComponent,
		HomeComponent,
		PageNotFoundComponent,
		PhotoComponent,
		PhotosComponent,
		PhotoListComponent
	],
	providers: [
		PhotoService,
		PhotoResolver
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }