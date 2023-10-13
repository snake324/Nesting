import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-rent',
  templateUrl: './sale-rent.component.html',
  styleUrls: ['./sale-rent.component.scss'],
})
export class SaleRentComponent  {
  showForm: boolean = true;
  showAlert: boolean = false; 
  alertMessage: string = '';
  alertType: string = '';
  propertyForm: FormGroup;
  houseTypes: string[] = ['Casa', 'Piso', 'Terreno', 'Solar'];
  types: string[] = ['Venta', 'Alquiler'];
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
    { name: 'Oviedo', postalCodes: ['33001', '33002', '33003'] },
  ];
  filteredPostalCodes: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService,
    private router: Router
    ) {

    this.selectedBedrooms = 'Habitaciones';

    this.propertyForm = this.formBuilder.group({
      title: '',
      description: '',
      city: '',
      postalCode: '',
      rooms: '',
      baths: '',
      size: '',
      price: '',
      type: '',
      status: true,
      houseType: '',
      address: ''
    });
  }

  ngOnInit() {
    this.propertyForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      rooms: ['', Validators.required],
      baths: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      status: [true],
      houseType: [''],
      address: [''],
    });
  }

  selectPropertyType(houseType: string) {
    this.propertyForm.get('houseType')?.setValue(houseType);
    this.selectedPropertyType = houseType;
  }
  selectTransactionType(type: string) {
    this.propertyForm.get('type')?.setValue(type);
    this.selectedTransactionType = type;
  }
  selectBathrooms(baths: string) {
    this.selectedBathrooms = baths;
    this.propertyForm.get('baths')?.setValue(baths);
  }
  
  selectBedrooms(rooms: string) {
    this.selectedBedrooms = rooms;
    this.propertyForm.get('rooms')?.setValue(rooms);
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

  onSubmit(): void {
    const propertyData = this.propertyForm.value;
    const userId = localStorage.getItem('userId');
  
    if (userId) {
      this.propertiesService.saveProperty(propertyData, userId).subscribe(
        (response) => {
          this.alertMessage = 'Propiedad guardada con éxito.';
          this.alertType = 'success';
  
          setTimeout(() => {
            this.router.navigate(['/user-forms/profile', userId]);
          }, 3000);
        },
        (error) => {
          this.alertMessage = 'Error al guardar la propiedad.';
          this.alertType = 'danger';
  
          console.error('Error al guardar la propiedad', error);
        }
      );
    } else {
      console.error('El userId no está presente en el almacenamiento local');
    }
  }

  goBack() {
    this.router.navigate(['../']);
  }
  
}