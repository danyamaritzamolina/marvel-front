import { Component, Inject, OnInit } from '@angular/core';
import { GetCharacteres } from '../services/getCharacteres';
import { BitacoraModel } from '../model/bitacora-model';


@Component({
  selector: 'app-modal-bitacora',
  templateUrl: './modal-bitacora.component.html',
  styleUrls: ['./modal-bitacora.component.css'],
  providers: [GetCharacteres]
})
export class ModalBitacoraComponent implements OnInit {
  dataBitacora: BitacoraModel[]=[] ;


  constructor(private getCharact: GetCharacteres,
    ) { }


  ngOnInit(): void {
    this.getCharact.getBitacora().subscribe((res) => {
      console.log("BASE DE DATOS: ", res);
      this.dataBitacora = res;
    });
  }

}
