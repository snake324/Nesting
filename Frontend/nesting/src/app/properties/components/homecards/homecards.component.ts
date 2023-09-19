import { Component, OnInit } from '@angular/core';
import { Properties } from '../../models/properties.model';
import { Router } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.scss']
})
export class HomecardsComponent implements OnInit {
  propertyData: Properties[] = [];
  filteredPropertyData: Properties[] = []; // Lista de propiedades filtradas
  filters = {
    propertyType: 'Todos',
    city: 'Todas',
    postalCode: 'Todos'
  };

  constructor(private router: Router, private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.fetchPropertyData();
  }

  fetchPropertyData() {
    this.propertiesService.getProperties().subscribe(
      (data: Properties[]) => {
        this.propertyData = data;
        this.applyFilters();
      },
      (error) => {
        console.log('Error fetching properties data: ', error);
      }
    );
  }

  applyFilters() {
    console.log('applyFilters() llamado');
    this.filteredPropertyData = this.propertyData.filter((property) => {
      return (
        (this.filters.propertyType === 'Todos' || property.type === this.filters.propertyType) &&
        (this.filters.city === 'Todas' || property.city === this.filters.city) &&
        (this.filters.postalCode === 'Todos' || property.postalCode === this.filters.postalCode)
      );
    });
  }

  updatePropertyTypeFilter(type: string) {
    this.filters.propertyType = type;
    this.applyFilters();
  }

  updateCityFilter(city: string) {
    this.filters.city = city;
    this.applyFilters();
  }

  updatePostalCodeFilter(postalCode: string) {
    this.filters.postalCode = postalCode;
    this.applyFilters();
  }
}
