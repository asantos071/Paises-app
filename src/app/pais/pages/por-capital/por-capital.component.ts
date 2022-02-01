import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "Hola Mundo";
  errExist: boolean = false;
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.errExist = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe((resp_paises) => {        
        this.paises = resp_paises;
      }, (err) => {
        console.log(err);
        this.errExist = true;
        this.paises = [];
      });
    console.log(this.termino);


  }

}
