import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// components
import * as fromComponents from './components';
// containers
import * as fromContainers from './containers';
// services
import * as fromServices from './services';

@NgModule({
	imports: [ CommonModule, ReactiveFormsModule, HttpClientModule, ProductsRoutingModule ],
	providers: [ ...fromServices.services ],
	declarations: [ ...fromContainers.containers, ...fromComponents.components ],
	exports: [ ...fromContainers.containers, ...fromComponents.components ]
})
export class ProductsModule {}
