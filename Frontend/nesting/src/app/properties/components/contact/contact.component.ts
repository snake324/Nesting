import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  property: any;
  comment: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
    private router: Router,
    private http: HttpClient
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

  sendEmail() {
    const emailContent = {
      subject: 'Nuevo comentario sobre la propiedad',
      body: this.comment
    };
  
    const ownerEmail = this.property.ownermail;
    const backendUrl = 'http://localhost:4000';
  
    const url = `${backendUrl}/sendmail?to=${ownerEmail}`;
  
    this.http.post(url, emailContent).subscribe((response: any) => {
      console.log(response);
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
