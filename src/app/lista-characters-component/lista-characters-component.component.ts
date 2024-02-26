import { Component, Injectable, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { ModalCharacterComponentComponent } from '../modal-character-component/modal-character-component.component';
import { ModalBitacoraComponent } from '../modal-bitacora/modal-bitacora.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetCharacteres } from '../services/getCharacteres';
/**
 * Pantalla principal para mostrar lista de personajes provenientes de la api externa
 */

@Component({
  selector: 'app-lista-characters-component',
  templateUrl: './lista-characters-component.component.html',
  styleUrls: ['./lista-characters-component.component.css'],
  providers: [GetCharacteres]
})
@Injectable()
export class ListaCharactersComponentComponent implements OnInit {

  charList : Character[] = [];
  character!: Character;
  resultado: any;

   constructor(private modalService: NgbModal,
               private http: HttpClient,
               private getCharact: GetCharacteres) {
   }
  ngOnInit() {
    let timestamp = new Date().getTime();

    this.getCharact.postBitacora(timestamp).subscribe((res) => {
    });
    this.getCharact.getAll(timestamp).subscribe((res) => {
      this.charList= res.data.results;
    });
  }

  onSelect(hero: Character): void {
    this.character = hero;
    const modalRef = this.modalService.open(ModalCharacterComponentComponent,{
      size:'xl'
    });
    //modalRef.componentInstance.characterData=this.character;
    modalRef.componentInstance.idCharacter=this.character.id;



  }

  onBitacora(): void {
    const modalRef = this.modalService.open(ModalBitacoraComponent,{
      size:'lg'
    });


  }

}
