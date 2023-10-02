import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sale-rent',
  templateUrl: './sale-rent.component.html',
  styleUrls: ['./sale-rent.component.scss']
})
export class SaleRentComponent  {
  propertyForm: FormGroup;
  propertyTypes: string[] = ['Tipo propiedad','Casa', 'Piso', 'Terreno', 'Solar'];
  transactionTypes: string[] = ['Tipo transacción', 'Venta', 'Alquiler'];
  bathroomsOptions: string[] = ['Baños', '1', '2', '3', '4', '5', '6'];
  bedroomsOptions: string[] = ['Habitaciones', '1', '2', '3', '4', '5', '6', '7', '8'];
  selectedPropertyType: string = 'Tipo propiedad';
  selectedTransactionType: string = 'Tipo transacción';
  selectedBathrooms: string = 'Baños';
  selectedBedrooms: string = 'Habitaciones';
  cities = [
    { name: 'Madrid', postalCodes: ['28001', '28002', '28003'] },
    { name: 'Barcelona', postalCodes: ['08001', '08002', '08003'] },
    { name: 'Valencia', postalCodes: ['46001', '46002', '46003'] },
    { name: 'Oviedo', postalCodes: ['33001', '33002', '33003'] }
  ];
  filteredPostalCodes: string[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.propertyForm = this.formBuilder.group({
      propertyType: [''],
      transactionType: [''],
      bathrooms: [''],
      bedrooms: [''],
      city: [''],
      postalCode: [''],
      surface: [''],
      price: [''],
      description: ['']
    });
  }
  selectPropertyType(index: number) {
    this.propertyForm.patchValue({ propertyType: index });
    this.selectedPropertyType = this.propertyTypes[index - 1];
  }
  selectTransactionType(transactionType: string) {
    this.propertyForm.patchValue({ transactionType: transactionType });
    this.selectedTransactionType = transactionType;
  }
  selectBathrooms(bathrooms: number) {
    this.propertyForm.patchValue({ bathrooms: bathrooms });
    this.selectedBathrooms = bathrooms.toString();
  }
  selectBedrooms(bedrooms: number) {
    this.propertyForm.patchValue({ bedrooms: bedrooms });
    this.selectedBedrooms = bedrooms.toString();
  }
  selectCity(city: string) {
    if (this.propertyForm.get('city')) {
      this.propertyForm.get('city')?.setValue(city);
      this.propertyForm.get('postalCode')?.reset(); // Resetear el código postal al seleccionar una nueva ciudad
    }
  }
  selectPostalCode(postalCode: string) {
    if (this.propertyForm.get('postalCode')) {
      this.propertyForm.get('postalCode')?.setValue(postalCode);
    }
  }
  onCitySelect() {
    console.log('onCitySelect called');
    const selectedCity = this.propertyForm.get('city')?.value;
    const city = this.cities.find(c => c.name === selectedCity);
    if (city) {
      this.filteredPostalCodes = city.postalCodes;
    } else {
      this.filteredPostalCodes = [];
    }
    const isDisabled = !selectedCity;
    console.log('Disabled:', isDisabled);
    this.propertyForm.patchValue({ postalCode: '' });
  }
  onSubmit() {
    const formData = this.propertyForm.value;
  }}







