import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesPublishedService } from '../../service/properties-published.service'; // Asegúrate de importar el servicio adecuado

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent {
  propertyId: string | null = null; // Declarar propertyId

  constructor(
    private route: ActivatedRoute,
    private propertiesPublishedService: PropertiesPublishedService 
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.propertyId = params.get('id');

      // Si tienes el ID de la propiedad, puedes cargar los datos de la propiedad utilizando el servicio
      if (this.propertyId) {
        this.loadPropertyData();
      }
    });
  }

  loadPropertyData() {
    if (this.propertyId) {
      // Utiliza this.propertyId para cargar los datos de la propiedad utilizando el servicio
      this.propertiesPublishedService.getPropertyById(this.propertyId).subscribe(
        (propertyData) => {
          // Aquí puedes asignar los datos de la propiedad a los campos del formulario
          // propertyData contiene la información de la propiedad que puedes utilizar en el formulario
        },
        (error) => {
          console.error('Error al cargar los datos de la propiedad:', error);
        }
      );
    }
  }
  

  // Agrega la lógica para guardar los cambios en la propiedad

}
