import { Component, OnInit } from '@angular/core';
import { TablaService } from '../../../service/tabla.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tablaData: any[] = [];

  constructor(private tablaService: TablaService) {}

  ngOnInit(): void {
    this.fetchTablaData();
  }

  fetchTablaData() {
    this.tablaService.getTablaData().subscribe((data: any[]) => {
      this.tablaData = data;
    });
  }
}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.scss']
// })
// export class AdminComponent implements OnInit {
  
//     ngOnInit(): void {
      
//       this.getPosts();
//       this.createPost();
//       this.deletePost();
//     }
  
//     getPosts() {
//       fetch('https://localhost:4000/properties/admin')
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//     }
  
//     createPost() {
//       fetch('https://localhost:4000/properties/', {
//       method: 'POST',
//       body: JSON.stringify({
//         id: 1,
//         nombre: 'paco',
//         apellidos: 'sanchez',
//         dni: '12345678a',
//         email: 'paco@email.es',
//         }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//     }

//       deletePost() {
//         fetch('https://localhost:4000/properties/admin', {
//         method: 'DELETE',
//         });
//     }

//   }
//       function deletePost() {
//         throw new Error('Function not implemented.');
//       }

      // getAllPosts() {
      //   this.requestService.getPosts().subscribe({
      //     next: (response: any) => {console.log(response)}
      //   });
      // }
    
      // createPostWithAngular() {
      //   let post = {
      //     id: 1,
      //     nombre: 'paco',
      //     apellidos: 'sanchez',
      //     dni: '12345678a',
      //     email: 'paco@email.es'
      //   };
      //   this.requestService.createPost(post).subscribe({
      //     next: (response: any) => { console.log(response)},
      //     error: (error: any) =>{ console.log(error)}
      //   });
      // }     


// function getAllPosts() {
//   throw new Error('Function not implemented.');
// }

// function createPostWithAngular() {
//   throw new Error('Function not implemented.');
// }
// filterpost = '';
// posts = [
  
// {
//   "id":1,
//   "nombre":"paco",
//   "apellidos":"sanchez",
//   "dni":"12345678a",
//   "email":"paco@email.es"
// },
// {
//   "id":2,
//   "nombre":"pedro",
//   "apellidos":"sanchez",
//   "dni":"12345679e",
//   "email":"pedro@email.es"
// },
// {
//   "id":3,
//   "nombre":"juan",
//   "apellidos":"sanchez",
//   "dni":"12345677b",
//   "email":"juan@email.es"
// },
// {
//   "id":4,
//   "nombre":"ana",
//   "apellidos":"sanchez",
//   "dni":"12345667o",
//   "email":"ana@email.es"
// },
// {
//   "id":5,
//   "nombre":"bea",
//   "apellidos":"sanchez",
//   "dni":"44235687k",
//   "email":"bea@email.es"
// },
// ]
 
