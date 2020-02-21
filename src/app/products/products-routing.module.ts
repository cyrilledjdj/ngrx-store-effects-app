import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromContainers.ProductsComponent
	},
	{
		path: ':id',
		component: fromContainers.ProductItemComponent
	},
	{
		path: 'new',
		component: fromContainers.ProductItemComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES) ],
	exports: [ RouterModule ]
})
export class ProductsRoutingModule {}
