import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-rent',
  templateUrl: './sale-rent.component.html',
  styleUrls: ['./sale-rent.component.scss']
})
export class SaleRentComponent implements OnInit{

  propertyType: string = '';
  transactionType: string = '';
  bathrooms: string = '';
  bedrooms: string = '';
  surface: string = '';
  price: string = '';
  city: string | null = null;
  postalCode: string | null = null;

  ciudades: string[] = ['Madrid', 'Barcelona', 'Valencia', 'Oviedo', 'Zaragoza'];
  codigosPostales: { ciudad: string, codigo: string }[] = [
    { ciudad: 'Madrid', codigo: '28001' },
    { ciudad: 'Madrid', codigo: '28002' },
    { ciudad: 'Madrid', codigo: '28003' },
    { ciudad: 'Madrid', codigo: '28004' },
    { ciudad: 'Barcelona', codigo: '08001' },
    { ciudad: 'Barcelona', codigo: '08002' },
    { ciudad: 'Barcelona', codigo: '08003' },
    { ciudad: 'Barcelona', codigo: '08004' },
    { ciudad: 'Valencia', codigo: '46001' },
    { ciudad: 'Valencia', codigo: '46002' },
    { ciudad: 'Valencia', codigo: '46020' },
    { ciudad: 'Valencia', codigo: '46093' },
    // ... otros códigos postales
  ];

  codigosPostalesFiltrados: { ciudad: string, codigo: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    // Inicializa los códigos postales filtrados con todos los códigos postales
    this.codigosPostalesFiltrados = [...this.codigosPostales];
  }

  // Este método se llama cuando cambia la ciudad seleccionada
  onCityChange(): void {
    // Asegúrate de que city tenga un valor antes de filtrar los códigos postales
    if (this.city !== null) {
      this.filtrarCodigosPostales();
    }
  }

  filtrarCodigosPostales(): void {
    if (this.city === null) {
      return;
    }
    const ciudadSeleccionada = this.city.toLowerCase();
    // Filtra los códigos postales sin modificar la matriz original
    this.codigosPostalesFiltrados = this.codigosPostales
      .filter(cp => cp.ciudad.toLowerCase() === this.city.toLowerCase());

    if (this.codigosPostalesFiltrados.length === 0) {
      console.log('No se encontraron códigos postales para esta ciudad.');
    } else {
      // Si hay códigos postales, selecciona el primero automáticamente
      this.postalCode = this.codigosPostalesFiltrados[0].codigo;
    }
  }

  // Puedes agregar más funciones y métodos aquí según tus necesidades

}