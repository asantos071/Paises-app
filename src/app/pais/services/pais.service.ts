import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  public paises: Country[] = [];

  constructor(private http: HttpClient) { }

  getParams(): HttpParams {
    return new HttpParams()
      .set('fields', 'name,capital,alpha2Code,flag,population')
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url,{ params: this.getParams() });
  }


  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{ params: this.getParams() });
  }

  buscarPaisPorID(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  buscarRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region.codigo}`
    return this.http.get<Country[]>(url, { params: this.getParams() })
      .pipe(
        tap(console.log)
      )
  }
}
