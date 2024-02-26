import { Component, Injectable, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterList } from '../model/character-mock';
import { ModalCharacterComponentComponent } from '../modal-character-component/modal-character-component.component';
import { ModalBitacoraComponent } from '../modal-bitacora/modal-bitacora.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetCharacteres } from '../services/getCharacteres';


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
    console.log("TIMESTAMP",timestamp);

    this.getCharact.postBitacora(timestamp).subscribe((res) => {
      console.log("BASE DE DATOS, REGISTRO CREADO", res);
    });
    this.getCharact.getAll(timestamp).subscribe((res) => {
      console.log('Respuesta',res.data.results)
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
    console.log("ABRIR MODAL BITACORA")
    const modalRef = this.modalService.open(ModalBitacoraComponent,{
      size:'lg'
    });


  }

}
