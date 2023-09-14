import { Component, OnInit } from '@angular/core';
import { Properties } from '../../models/properties.model';
import { Router } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';

@Component({
  selector: 'app-filterbox',
  templateUrl: './filterbox.component.html',
  styleUrls: ['./filterbox.component.scss']
})
export class FilterboxComponent /*implements OnInit*/{
/*
  properties: Properties[] = [];

  constructor(private router: Router, private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.propertiesService.getProperties().subscribe(
      (properties: Properties[]) => {
        this.properties = properties
      },
      (error) => {
        console.log('Error al obtener las propiedades:', error);
      }
    );
  }
 
*/
  
}
