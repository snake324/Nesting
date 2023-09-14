import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../service/properties.service';

@Component({
  selector: 'app-filterbox',
  templateUrl: './filterbox.component.html',
  styleUrls: ['./filterbox.component.scss']
})
export class FilterboxComponent implements OnInit {
  cities: string[] = [];
  postalCodes: string[] = [];

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.getPropertiesData();
  }

  getPropertiesData() {
    this.propertiesService.getProperties().subscribe((properties) => {
      this.cities = Array.from(new Set(properties.map((property) => property.city)));
      this.postalCodes = Array.from(new Set(properties.map((property) => property.postalCode)));
    });
  }
}
