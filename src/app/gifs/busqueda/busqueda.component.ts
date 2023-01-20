import { Component, ViewChild , ElementRef} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{
    @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; //el viewChild busca en el html el txtBuscar
    
    constructor(private gifsServicio : GifsService){}
    //txtBuscar es de tipo elementRef
    buscar(){                                                       //el ! le dice a typescript que el elemento siempre va a a tener algo por lo que no necesita ser inicializado (no sera null)
        const valor = this.txtBuscar.nativeElement.value;
          
        if(valor.trim().length === 0){ //para que no agrege nada al arreglo si es que se presiona enter y no se escribe  nada (de lo contrario agregaria espacios vacios al arreglo y queremos que no agrege nada){
            return;
        }
        //
        this.gifsServicio.buscarGifs( valor ); //se guarda en el arreglo asiendo uso del metodo que esta en el servicio

        this.txtBuscar.nativeElement.value="";
    }


}
