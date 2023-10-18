import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
        <div class="container">
            <div classs="row">
                <div class="col">
                    <h1>{{titulo}}</h1>
                    <h3>La base es: <strong> {{base}} </strong></h3>
            
                    <button class="btn btn-primary" (click)="acumular( base )"> +{{base}} </button>
                    <span> {{numero}} </span>
                    <button class="btn btn-primary" (click)="acumular( -base )"> -{{base}} </button>
                </div>
            </div>
        </div>
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number){
        this.numero += valor
    }
}