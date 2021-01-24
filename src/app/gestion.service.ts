import { Medicament } from './../model/Medicament';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http:HttpClient) { }
  getAllMedicament()
  {return this.http.get("http://127.0.0.1:8080/rest/all")}
  delete(id:number)
  {return this.http.delete("http://127.0.0.1:8080/rest/deletemedicament/"+id)}
  add(medicament:Medicament)
  {return this.http.post("http://127.0.0.1:8080/rest/addmedicament/",medicament)}
  getdetail(id:number)
  {return this.http.get("http://127.0.0.1:8080/rest/detail/"+id)}

}
