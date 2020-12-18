import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departament } from '../models/Departamet';
import { Global } from './globsl';


@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

    private url : string;
  
    constructor(private _departamentservice: HttpClient) {
      this.url = Global.url;
    }
  
    getRecords(){
      return this._departamentservice.get<Departament[]>(this.url + 'departments');
    }
  
    insertRecord(departament : Departament){
      return this._departamentservice.post<Departament>(this.url + 'departments',departament );
    }
  
    updateRecord(departament : Departament , id: number){
      return this._departamentservice.put(this.url + 'departments/' + id, departament)
    }
  
    deleteRecord(id: number){
      return this._departamentservice.delete(this.url + 'departments/' + id);
    }
  
    getOneRecord(id: number){
      return this._departamentservice.get<Departament>(this.url + 'departments/' +id);
    }
  
  
  }