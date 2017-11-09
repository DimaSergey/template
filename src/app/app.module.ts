import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './components/app.component/app.component';
import { IndexComponent } from './components/index/index.component';

const appRoutes = [
	{path:"", component:IndexComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true}
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
