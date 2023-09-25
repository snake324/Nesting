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

  cities: string[] = []; // Lista de ciudades únicas
  postalCodes: string[] = []; // Lista de códigos postales únicos
  selectedCity: string = 'Ciudad'; // Variable de selección para la ciudad
  selectedPostalCode: string = 'Codigo Postal'; // Variable de selección para el código postal

  constructor(private router: Router, private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.fetchPropertyData();
  }

  fetchPropertyData() {
    this.propertiesService.getProperties().subscribe(
      (data: Properties[]) => {
        this.propertyData = data;
        this.extractUniqueCitiesAndPostalCodes(); // Llama a la función para obtener las ciudades y códigos postales únicos
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
        (this.selectedCity === 'Ciudad' || property.city === this.selectedCity) &&
        (this.selectedPostalCode === 'Codigo Postal' || property.postalCode === this.selectedPostalCode)
      );
    });
  }

  updatePropertyTypeFilter(type: string) {
    this.filters.propertyType = type;
    this.applyFilters();
  }

  updateCityFilter(city: string) {
    this.selectedCity = city;
  }

  updatePostalCodeFilter(postalCode: string) {
    this.selectedPostalCode = postalCode;
  }

  extractUniqueCitiesAndPostalCodes() {
    this.cities = [...new Set(this.propertyData.map((property) => property.city))];
    this.postalCodes = [...new Set(this.propertyData.map((property) => property.postalCode))];
  }
}
