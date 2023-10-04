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
  selectedCity: string='';
  selectedPostalCode: string='';
  cities = [
    { name: 'Madrid', postalCodes: ['28001', '28002', '28003'] },
    { name: 'Barcelona', postalCodes: ['08001', '08002', '08003'] },
    { name: 'Valencia', postalCodes: ['46001', '46002', '46003'] },
    { name: 'Oviedo', postalCodes: ['33001', '33002', '33003'] }
  ];
  filteredPostalCodes: string[] = [];
  constructor(private formBuilder: FormBuilder) {

    this.selectedBedrooms = 'Habitaciones';

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
  selectBathrooms(bathrooms: string) {
    if (bathrooms === 'Baños' || bathrooms === this.selectedBathrooms) {
      this.selectedBathrooms = 'Baños';
      this.propertyForm.get('bathrooms')?.setValue('');
    } else {
      this.selectedBathrooms = bathrooms;
      this.propertyForm.get('bathrooms')?.setValue(bathrooms);
    }
  }
  selectBedrooms(bedrooms: string) {
    if (bedrooms === 'Habitaciones' || bedrooms === this.selectedBedrooms) {
      this.selectedBedrooms = 'Habitaciones';
      this.propertyForm.get('bedrooms')?.setValue('');
    } else {
      this.selectedBedrooms = bedrooms;
      this.propertyForm.get('bedrooms')?.setValue(bedrooms);
    }
  }
  selectCity(city: string) {
    this.propertyForm.patchValue({ city: city });
    this.selectedCity = city;
    this.propertyForm.get('postalCode')?.reset();
    this.filteredPostalCodes = [];
    if (city) {
      const selectedCity = this.cities.find(c => c.name === city);
      if (selectedCity) {
        this.filteredPostalCodes = selectedCity.postalCodes;
      }
    }
    this.propertyForm.patchValue({ postalCode: '' });
  }
  selectPostalCode(postalCode: string) {
    this.propertyForm.patchValue({ postalCode: postalCode });
    this.selectedPostalCode = postalCode;
  }

  getCityValue() {
    return this.propertyForm.get('city')?.value || 'Selecciona una ciudad';
  }

  getPostalCodeValue() {
    return this.propertyForm.get('postalCode')?.value || 'Código postal';
  }



  onCitySelect() {
    console.log('onCitySelect called');
    const selectedCity = this.propertyForm.get('city')?.value;

    if (selectedCity) {
      const city = this.cities.find(c => c.name === selectedCity);
      if (city) {
        this.filteredPostalCodes = city.postalCodes;
        console.log('Filtered Postal Codes:', this.filteredPostalCodes);
      } else {
        this.filteredPostalCodes = [];
      }
    } else {
      this.filteredPostalCodes = [];
    }

    const isDisabled = !selectedCity;
    console.log('Disabled:', isDisabled);

    this.propertyForm.patchValue({ postalCode: '' });
  }
  onSubmit() {
    const formData = this.propertyForm.value;
  }
}





