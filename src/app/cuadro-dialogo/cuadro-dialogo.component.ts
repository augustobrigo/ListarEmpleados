import { Component, Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Emp } from '../emp';

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadro-dialogo.component.html',
  styleUrls: ['./cuadro-dialogo.component.css']
})
export class CuadroDialogoComponent {

  constructor(
    public dialogRef: MatDialogRef<CuadroDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Emp){}
    Cancelar(){
    this.dialogRef.close();
    }


confirmar() {
}

}
