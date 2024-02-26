import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../model/character';
import { GetCharacteres } from '../services/getCharacteres';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-modal-character-component',
  templateUrl: './modal-character-component.component.html',
  styleUrls: ['./modal-character-component.component.css'],
  providers: [GetCharacteres]
})
export class ModalCharacterComponentComponent implements OnInit {
  //public characterData: Character={};
  @Input() characterData: Character={} as Character;
  @Input() idCharacter: any;


  constructor(private getCharact: GetCharacteres) {
                console.log(this.idCharacter);
                console.log(this.characterData);
                /*this.miVariableObservable = new Observable(observer => {
                  // Emite valores a los observadores
                  observer.next({id:0,name:"", description:""});
                  observer.complete(); // Completa el observable al finalizar
                });*/
  }

  ngOnInit(): void {
    let timestamp = new Date().getTime();
    console.log("TIMESTAMP",timestamp);

    this.getCharact.postBitacora(timestamp).subscribe((res) => {
      console.log("BASE DE DATOS, REGISTRO CREADO", res);
    });
    if (this.idCharacter !== undefined) {
      this.getCharact.getById(this.idCharacter, timestamp).subscribe((res) => {
        this.characterData= res.data.results[0];
      });
    }
  }

}
