import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// this would be done dynamically with webpack for builds

export const metaReducers: MetaReducer<any>[] = !environment.production ? [ storeFreeze ] : [];

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		StoreModule.forRoot({}, { metaReducers }),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
