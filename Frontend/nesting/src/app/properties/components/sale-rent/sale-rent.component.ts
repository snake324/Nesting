import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-sale-rent',
  templateUrl: './sale-rent.component.html',
  styleUrls: ['./sale-rent.component.scss']
})
export class SaleRentComponent {

  propertyForm: FormGroup;

  
  cities = [
    { name: 'Madrid', postalCodes: ['28001', '28002', '28003'] },
    { name: 'Barcelona', postalCodes: ['08001', '08002', '08003'] },
    { name: 'Valencia', postalCodes: ['46001', '46002', '46003'] },
    { name: 'Oviedo', postalCodes: ['33001', '33002', '33003'] }
  ];

  filteredpostalCodes: string[] = [];

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

  
  onCitySelect() {
    const selectedCity = this.propertyForm.get('city')?.value;
    const city = this.cities.find(c => c.name === selectedCity);

    if (city) {
      this.filteredpostalCodes = city.postalCodes;
    } else {
      this.filteredpostalCodes = [];
    }

    console.log('postalCodes:', this.filteredpostalCodes);
    this.propertyForm.patchValue({ postalCode: '' });
  }

  
  onSubmit() {
    const formData = this.propertyForm.value;
    
  }

}