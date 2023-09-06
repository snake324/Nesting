import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyFormComponent } from './views/property-form/property-form.component';
import { PrevisualizationComponent } from './views/previsualization/previsualization.component';


@NgModule({
  declarations: [
    PropertyFormComponent,
    PrevisualizationComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
