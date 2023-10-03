import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  property: any;

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.propertiesService.getProperty(id).subscribe(
        (propertyDetails: any) => {
          this.property = propertyDetails;
        },
        error => {
          console.error('Error obteniendo detalles de la propiedad:', error);
        }
      );
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
