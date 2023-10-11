import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface EmailResponse {
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  property: any;
  comment: string = ''; 
  showAlert: boolean = false; 
  alertMessage: string = '';
  alertType: string = '';
  

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
      body: `El usuario se ha interesado por tu propiedad y te ha dejado el siguiente mensaje:\n\n${this.comment}`
    };
  
    const ownerEmail = this.property.ownermail;
    const backendUrl = 'http://localhost:4000/sendmail';
    const url = `${backendUrl}?to=${ownerEmail}&body=${emailContent.body}`;
  
    this.http.post<EmailResponse>(url, {}) 
      .subscribe(
        (response) => {
          
        this.alertMessage = 'Correo electrónico enviado con éxito.';
        this.alertType = 'success';

        this.comment = '';

        setTimeout(() => {
          this.router.navigate(['../']);
        }, 3000);

        },
        (error) => {
          console.error('Error sending email:', error);
  
          
          window.alert('Error sending email. Please try again.');
        }
      );
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
