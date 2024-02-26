import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { GetCharacteres } from '../services/getCharacteres';

/**
 * Pantalla de modal para mostrar información del detalle del personaje seleccionado en la pantalla principal
 */
@Component({
  selector: 'app-modal-character-component',
  templateUrl: './modal-character-component.component.html',
  styleUrls: ['./modal-character-component.component.css'],
  providers: [GetCharacteres]
})
export class ModalCharacterComponentComponent implements OnInit {
  @Input() characterData: Character={} as Character;
  @Input() idCharacter: any;


  constructor(private getCharact: GetCharacteres) {
                console.log(this.idCharacter);
                console.log(this.characterData);
  }

  ngOnInit(): void {
    let timestamp = new Date().getTime();

    this.getCharact.postBitacora(timestamp).subscribe((res) => {
    });
    if (this.idCharacter !== undefined) {
      this.getCharact.getById(this.idCharacter, timestamp).subscribe((res) => {
        this.characterData= res.data.results[0];
      });
    }
  }

}
