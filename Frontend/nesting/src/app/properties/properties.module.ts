import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyFormComponent } from './views/property-form/property-form.component';
import { PrevisualizationComponent } from './views/previsualization/previsualization.component';
import { FilterboxComponent } from './components/filterbox/filterbox.component';


@NgModule({
  declarations: [
    PropertyFormComponent,
    PrevisualizationComponent,
    FilterboxComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
