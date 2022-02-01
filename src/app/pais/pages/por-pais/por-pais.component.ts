import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = "Hola Mundo";
  errExist: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino:string) {
    this.errExist = false;
    this.termino = termino; 
    this.paisService.buscarPais(this.termino)
      .subscribe((resp_paises) => {
        this.paises = resp_paises;
      }, (err) => {
        console.log(err);
        this.errExist = true;
        this.paises = [];
      });
    console.log(this.termino);
  }

  sugerencias(termino:string){
    this.errExist = false;
    //TODO_ Crear sugerencias
  }
}
