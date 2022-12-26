import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'evaluacion1';
  articulos: any;
  constructor(private articulosServicio: ArticulosService){}

  ngOnInit() {
    this.articulos = this.articulosServicio.retornar();
  }

  art = {
    codigo:0 ,
    descripcion:"",
    precio:0
  }

  hayRegistro(){
    return this.articulos.length>0;
  }

  borrar(codigo:number) {
    for(let x=0;x<this.articulos.length;x++)
      if(this.articulos[x].codigo==codigo) {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar(){
    if(this.art.codigo==0){
      alert('El articulo debe ser distinto de 0');
      return;
    }
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('Articulo existente');
      return;
    }    
    this.articulos.push({codigo:this.art.codigo, descripcion: this.art.descripcion, precio:this.art.precio});
    this.art.codigo=0;
    this.art.descripcion='';
    this.art.precio=0;
  }

  seleccionar(art:{codigo:number;descripcion:string;precio:number}){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar(){
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('El articulo no existe');
  }
}
