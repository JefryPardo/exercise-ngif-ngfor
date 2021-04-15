import { Component } from '@angular/core';

@Component({
    selector: 'app-body' ,
    templateUrl: './body.component.html'   
})

export class BodyComponent{
    
    mostrar = true;

    frase: any ={
        mensaje: 'Hoy no fío, mañana sí.',
        autor: 'Jeff'
    }


    personajes: string[] = ['Jeff','Johan','Jeffry']
}