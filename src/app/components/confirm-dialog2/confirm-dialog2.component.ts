import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Departament } from 'src/app/models/Departamet';
import { DepartamentService } from 'src/app/services/departament.service';


@Component({
  selector: 'app-confirm-dialog2',
  templateUrl: './confirm-dialog2.component.html',
  styleUrls: ['./confirm-dialog2.component.css']
})
export class ConfirmDialog2Component implements OnInit {
  id:number;
  tittle: string;
  departament = new Departament();

  constructor(private _departamentService: DepartamentService,
    private _snackBar :MatSnackBar,
    private dialog:MatDialogRef<ConfirmDialog2Component>,
    @Inject(MAT_DIALOG_DATA)public data) {
      this.id =data.id;
      this.tittle = data.title;
     }
     openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 3000,
      });
    }
    closeDialog(): void {
      this.dialog.close(true);
    }


  ngOnInit() {
    this.getOneRecord();
    }
    

 
    confirmUpdate(){
      const errorMsg = 'Error al actualizar verifique';
      const successMsg = 'Éxito al actualizar usuario';
      this._departamentService.updateRecord(this.departament, this.id).subscribe(
        success =>{
          this.closeDialog();
          this.openSnackBar(successMsg, 'Cerrar');
        },
        err => {
          this.openSnackBar(errorMsg, 'Cerrar');
        }
      )
    }
  
    getOneRecord(){
      this._departamentService.getOneRecord(this.id).subscribe(
        success =>{
          this.departament = success;
        },
        error =>{
          alert(error);
        }
      )
    }

  
    

}
