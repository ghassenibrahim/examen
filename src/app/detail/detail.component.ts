import { Type } from './../../model/Type';
import { Medicament } from './../../model/Medicament';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  num :number;
  m: any = { "id": null, "titre": "", "prix": 0.0 ,"Type":Type}
  constructor(private act:ActivatedRoute,  private ser :GestionService) {
    this.num =this.act.snapshot.params["id"];
    this.ser.getdetail(this.num).subscribe(
      (data) =>{ this.m=data},
      (err) =>{
        console.log(this.m);
      }
  
    )}
  

  ngOnInit(): void {
   
  }
 
}



