import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'products' },
	{
		path: 'products',
		loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
