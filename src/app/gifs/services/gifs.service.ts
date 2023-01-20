import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = 'IPK6xOWLhsr1k1hjp0dkPaTbgK9t9H6B';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient ) {}

  buscarGifs( query: string = '' ){

    query = query.trim().toLocaleLowerCase();

      if( !this._historial.includes( query )){ //si no esta repetido en el historiañ
        this._historial.unshift( query ); //lo inserta al final del arreglo por eso el unshift
        this._historial = this._historial.splice(0,10);
      }

      this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=IPK6xOWLhsr1k1hjp0dkPaTbgK9t9H6B&q=${ query }&limit=10`) //lo que sea que se reciba aca es lo que se va a mandar en la peticion http por eso el ${{query}}
          .subscribe( ( resp: any ) => {
            console.log(resp.data);
            this.resultados = resp.data;
          })
  }

}