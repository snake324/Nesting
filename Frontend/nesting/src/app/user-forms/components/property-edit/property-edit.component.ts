import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesPublishedService } from '../../service/properties-published.service'; 

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent implements OnInit {
  propertyId: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private propertiesPublishedService: PropertiesPublishedService 
  ) { }

  ngOnInit() {
    
    if (this.route.paramMap) {
      this.route.paramMap.subscribe(params => {
        this.propertyId = params.get('id');

        
        if (this.propertyId) {
          this.loadPropertyData();
        }
      });
    }
  }

  loadPropertyData() {
    if (this.propertyId) {
      
      this.propertiesPublishedService.getPropertyById(this.propertyId).subscribe(
        (propertyData) => {
          
          
        },
        (error) => {
          console.error('Error al cargar los datos de la propiedad:', error);
        }
      );
    }
  }

  
}
