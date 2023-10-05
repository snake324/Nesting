import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Properties } from '../../models/properties.model';
import { Router } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.scss'],
})
export class HomecardsComponent implements OnInit, AfterViewInit {
  propertyData: Properties[] = [];
  filteredPropertyData: Properties[] = [];
  filters = {
    propertyType: 'Todos',
    city: 'Todas',
    postalCode: 'Todos',
  };

  cities: string[] = [];
  postalCodes: string[] = [];
  selectedCity: string = 'Ciudad';
  selectedPostalCode: string = 'Codigo Postal';
  propertyTypes: string[] = [];
  houseTypes: string[] = [];
  selectedType: string = 'Tipo';
  selectedHouseType: string = 'Tipo de Vivienda';
  selectedPrice: string = 'Precio';
  selectedRooms: string = 'Habitaciones';
  selectedSize: string = 'Tamaño';
  selectedBaths: string = 'Baños';
  selectedCityColor: string = 'default-color';
  selectedCityColor1: string = 'default-color';
  selectedCityColor2: string = 'default-color';
  selectedCityColor3: string = 'default-color';
  selectedCityColor4: string = 'default-color';
  selectedCityColor5: string = 'default-color';
  selectedCityColor6: string = 'default-color';
  selectedCityColor7: string = 'default-color';

  showImgHomeDiv: boolean = true;

  filterBoxStylesVisible: any = {
    'background-color': '#f5b665',
    'width': '50%',
    'border-radius': '10px',
    'z-index': '1',
    'margin-top': '-5em',
    'margin-bottom': '1em',
    'height': '14em',
  };
  
  filterBoxStylesHidden: any = {
    'background-color': 'transparent', 
    'width': '50%',
    'border-radius': '10px',
    'z-index': '1',
    'margin-top': '-5em',
    'margin-bottom': '1em',
    'height': '14em',
  };

  

  constructor(
    private router: Router,
    private propertiesService: PropertiesService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.fetchPropertyData();
   
    
  }

  ngAfterViewInit() {
    
    this.applyFilters();
    this.cdr.detectChanges();
  }

  fetchPropertyData() {
    this.propertiesService.getProperties().subscribe(
      (data: Properties[]) => {
        this.propertyData = data;
        this.extractUniqueCitiesAndPostalCodes();
        this.extractUniqueTypes();
        this.extractUniqueHouseTypes();
        this.applyFilters();
        this.applyFilters();
      },
      (error) => {
        console.log('Error fetching properties data: ', error);
      },
      () => {
        this.applyFilters();
      }
    );
  }

  applyFilters() {
    console.log('applyFilters() llamado');
    this.filteredPropertyData = this.propertyData.filter((property) => {
      const typeCondition = this.selectedType === 'Tipo' || property.type === this.selectedType;
      const propertyTypeCondition = this.filters.propertyType === 'Todos' || property.type === this.filters.propertyType;
      const cityCondition = this.selectedCity === 'Ciudad' || property.city === this.selectedCity;
      const postalCodeCondition = this.selectedPostalCode === 'Codigo Postal' || property.postalCode === this.selectedPostalCode;
      const houseTypeCondition = this.selectedHouseType === 'Tipo de Vivienda' || property.houseType === this.selectedHouseType;
      const priceCondition = this.selectedPrice === 'Precio' || this.isPriceInRange(property.price);
      const sizeCondition = this.selectedSize === 'Tamaño' || this.isSizeInRange(property.size);
      const roomsCondition = this.selectedRooms === 'Habitaciones' || property.rooms === parseInt(this.selectedRooms);
      const bathsCondition = this.selectedBaths === 'Baños' || property.baths === parseInt(this.selectedBaths);
  
      const result = typeCondition && propertyTypeCondition && cityCondition && postalCodeCondition &&
        houseTypeCondition && priceCondition && sizeCondition && roomsCondition && bathsCondition;
  
      return result;
    });
  

  }

  extractUniqueTypes() {
    this.propertyTypes = [
      ...new Set(this.propertyData.map((property) => property.type)),
    ];
  }

  extractUniqueHouseTypes() {
    this.houseTypes = [
      ...new Set(this.propertyData.map((property) => property.houseType)),
    ];
  }

  updatePropertyTypeFilter(type: string) {
    this.filters.propertyType = type;
    this.applyFilters();
    this.selectedCityColor = 'selected-color';
    
  }

  updateCityFilter(city: string) {
    this.selectedCity = city;
    this.filters.city = city; 
    this.applyFilters();
    this.selectedCityColor = 'selected-color';
  }

  updatePostalCodeFilter(postalCode: string) {
    this.selectedPostalCode = postalCode;
    this.selectedCityColor2 = 'selected-color';
  }

  extractUniqueCitiesAndPostalCodes() {
    const uniqueCities = [...new Set(this.propertyData.map((property) => property.city))];
    this.cities = uniqueCities.sort(); 
  
    const uniquePostalCodes = [...new Set(this.propertyData.map((property) => property.postalCode))];
    this.postalCodes = uniquePostalCodes.sort(); 
  }

  updateTypeFilter(type: string) {
    this.selectedType = type;
    this.applyFilters();
    
  }

  updateHouseTypeFilter(houseType: string) {
    this.selectedHouseType = houseType;
    this.selectedCityColor3 = 'selected-color';
    
  }

  updateSizeFilter(minSize: number, maxSize: number) {
    this.selectedSize = `${minSize} - ${maxSize} m²`;
    this.selectedCityColor5 = 'selected-color';
    
  }

  updateRoomsFilter(rooms: number) {
    this.selectedRooms = `${rooms} habitación${rooms > 1 ? 'es' : ''}`;
    this.selectedCityColor6 = 'selected-color';
    
  }

  updatePriceFilter(minPrice: number, maxPrice: number) {
    this.selectedPrice = `${minPrice} - ${maxPrice}€`;
    this.selectedCityColor4 = 'selected-color';
    
  }

  updateBathsFilter(baths: number) {
    this.selectedBaths = `${baths} baño${baths > 1 ? 's' : ''}`;
    this.selectedCityColor7 = 'selected-color';
   
  }

  isPriceInRange(price: number): boolean {
    const [minPriceStr, maxPriceStr] = this.selectedPrice.split(' - ');
    const minPrice = parseFloat(minPriceStr);
    const maxPrice = parseFloat(maxPriceStr);

    return price >= minPrice && price <= maxPrice;
  }

  isSizeInRange(size: number): boolean {
    const [minSizeStr, maxSizeStr] = this.selectedSize.split(' - ');
    const minSize = parseFloat(minSizeStr);
    const maxSize = parseFloat(maxSizeStr);

    return size >= minSize && size <= maxSize;
  }

  resetFilters() {
    
    this.filters.propertyType = 'Todos';
    this.selectedCity = 'Ciudad';
    this.selectedPostalCode = 'Codigo Postal';
    this.selectedType = 'Tipo';
    this.selectedHouseType = 'Tipo de Vivienda';
    this.selectedPrice = 'Precio';
    this.selectedSize = 'Tamaño';
    this.selectedRooms = 'Habitaciones';
    this.selectedBaths = 'Baños';
    this.applyFilters();
    this.showImgHomeDiv = false;
    this.selectedCityColor = 'default-color';
    this.selectedCityColor2 = 'default-color';
    this.selectedCityColor3 = 'default-color';
    this.selectedCityColor4 = 'default-color';
    this.selectedCityColor5 = 'default-color';
    this.selectedCityColor6 = 'default-color';
    this.selectedCityColor7 = 'default-color';
  }

  leerMas(propertyId: number) {
    this.router.navigate(['descripcion-completa', propertyId]);
  }
  applyFiltersAndShowImage() {
    this.applyFilters();
    this.showImgHomeDiv = false;
    if (this.showImgHomeDiv) {
      this.filterBoxStylesVisible = {
        
        'background-color': '#f5b665',
        'width': '50%',
        'border-radius': '10px',
        'z-index': '1',
        'margin-top': '-5em',
        'margin-bottom': '1em',
        'height': '14em',
      };
    } else {
      this.filterBoxStylesHidden = {
    
        'background-color': 'transparent',
        'width': '50%',
        'border-radius': '10px',
        'z-index': '1',
        'margin-top': '-6em',
        'margin-bottom': '1em',
        'height': '14em',
      };
    }
  
    console.log('showImgHomeDiv:', this.showImgHomeDiv);
  }

  showImage() {
    this.showImgHomeDiv = this.filteredPropertyData.length > 0;
  }

  getPriceRange(start: number, end: number, step: number): number[] {
    const range = [];
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
    return range;
  }

  getMaxSafeInteger(): number {
    return Number.MAX_SAFE_INTEGER;
  }

  getPostalCodesForCity(city: string): string[] {
    const filteredPostalCodes = this.propertyData
      .filter((property) => city === 'Ciudad' || property.city === city)
      .map((property) => property.postalCode);
  
   
    const uniquePostalCodes = [...new Set(filteredPostalCodes)];
  
  
    return uniquePostalCodes.sort((a, b) => (a > b ? 1 : -1));
  }

  navigateToReserve() {
    const firstFilteredProperty = this.filteredPropertyData[0];
    if (firstFilteredProperty) {
      const propertyId = firstFilteredProperty.id;
      this.router.navigate(['/properties/reserve', propertyId]);
    }
  }
}
