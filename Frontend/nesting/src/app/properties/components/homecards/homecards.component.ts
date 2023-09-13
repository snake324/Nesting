import { Component, OnInit } from '@angular/core';
import { Properties } from '../../models/properties.model';
import { Router } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.scss']
})
export class HomecardsComponent implements OnInit{
  propertyData: Properties[]=[];
  constructor (private router: Router, private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.fetchPropertyData();    
  }

  fetchPropertyData() {
    this.propertiesService.getProperties().subscribe(
     (data:Properties[]) => {
      this.propertyData = data;
     },
     (error) => {
      console.log('Error fetching properties data: ', error);
     }
     );

    
   
  }


   
}
