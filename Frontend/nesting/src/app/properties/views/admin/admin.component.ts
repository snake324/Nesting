import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
constructor() { }
title = 'Users';


filterpost = '';
posts = [
  
{
  "id":1,
  "nombre":"paco",
  "apellidos":"sanchez",
  "dni":"12345678a",
  "email":"paco@email.es"
},
{
  "id":2,
  "nombre":"pedro",
  "apellidos":"sanchez",
  "dni":"12345679e",
  "email":"pedro@email.es"
},
{
  "id":3,
  "nombre":"juan",
  "apellidos":"sanchez",
  "dni":"12345677b",
  "email":"juan@email.es"
},
{
  "id":4,
  "nombre":"ana",
  "apellidos":"sanchez",
  "dni":"12345667o",
  "email":"ana@email.es"
},
{
  "id":5,
  "nombre":"bea",
  "apellidos":"sanchez",
  "dni":"44235687k",
  "email":"bea@email.es"
},
]
 ngOnInit(): void {
 

}
}