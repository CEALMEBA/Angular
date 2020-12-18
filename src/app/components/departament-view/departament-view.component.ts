import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Departament } from 'src/app/models/Departamet';
import { DepartamentService } from 'src/app/services/departament.service';
import { ConfirmDialog2Component } from '../confirm-dialog2/confirm-dialog2.component';

@Component({
  selector: 'app-departament-view',
  templateUrl: './departament-view.component.html',
  styleUrls: ['./departament-view.component.css']
})
export class DepartamentViewComponent implements OnInit {

  departament = new Departament();
  departamentToEdit= new Departament();
  departaments: Departament[] = [];
  displayedColumns: string[] = ['id','name','description','actions'];
  dataSource;

  constructor(private _departamentService : DepartamentService, private _snackBar: MatSnackBar,private dialogo: MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getDepartaments();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  onSubmit(){
    this._departamentService.insertRecord(this.departament).subscribe(
      success =>{
        this.openSnackBar('Agregado con éxito', 'Cerrar');
        this.getDepartaments();
        this.resetForm();
      },
      err=>{
        this.openSnackBar('Error al registrar', 'Cerrar');
      }
    )
}

  getDepartaments(){
    this._departamentService.getRecords().subscribe(
      success =>{
        console.log(success)
        this.departaments  = success;
        this.dataSource = new MatTableDataSource<Departament>(this.departaments);
        this.dataSource.paginator = this.paginator;
      },
      err =>{
        console.log(err)
      }
    )
  }
  openDialog2(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: id
    }

    this.dialogo.open(ConfirmDialog2Component, dialogConfig);

    const dialogRef = this.dialogo.open(ConfirmDialog2Component, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.getDepartaments()
    )

  }

  deleteOneRecord(id: number){
    if(confirm('Confirmar eliminación de registro ' )){
      this.deleteRecord(id)
    }
  }

  deleteRecord(id: number){
    this._departamentService.deleteRecord(id).subscribe(
      success =>{
        this.openSnackBar('Eliminado con éxito', 'Cerrar');
        this.getDepartaments();
      },
      err => {
        this.openSnackBar('Error al eliminar', 'Cerrar');
      }
    )
  }
  resetForm(){
    this.departament.id = 0;
    this.departament.name = '' ;
    this.departament.description = '' ;
  }

}
