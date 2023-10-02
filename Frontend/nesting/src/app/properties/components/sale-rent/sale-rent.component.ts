import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sale-rent',
  templateUrl: './sale-rent.component.html',
  styleUrls: ['./sale-rent.component.scss'],
})
export class SaleRentComponent {
  propertyForm: FormGroup;

  cities = [
    { name: 'Madrid', postalCodes: ['28001', '28002', '28003'] },
    { name: 'Barcelona', postalCodes: ['08001', '08002', '08003'] },
    { name: 'Valencia', postalCodes: ['46001', '46002', '46003'] },
    { name: 'Oviedo', postalCodes: ['33001', '33002', '33003'] },
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
      description: [''],
    });
  }

  selectPropertyType(propertyType: string) {
    this.propertyForm.patchValue({ propertyType });
  }

  selectTransactionType(transactionType: string) {
    this.propertyForm.patchValue({ transactionType });
  }

  selectCity(city: string) {
    this.propertyForm.patchValue({ city });
    this.onCitySelect();
  }

  selectPostalCode(postalCode: string) {
    this.propertyForm.patchValue({ postalCode });
  }

  onCitySelect() {
    const selectedCity = this.propertyForm.get('city')?.value;
    const city = this.cities.find((c) => c.name === selectedCity);

    if (city) {
      this.filteredPostalCodes = city.postalCodes;
    } else {
      this.filteredPostalCodes = [];
    }

    const isDisabled = !selectedCity;
    this.propertyForm.patchValue({ postalCode: '' });
  }

  onSubmit() {
    const formData = this.propertyForm.value;
    console.log('Form Data:', formData);
  }
}
