import { Router } from '@angular/router';
import { GestionService } from './../gestion.service';
import { Medicament } from './../../model/Medicament';
import { Type } from './../../model/Type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  Type: any = [];
  
  medicament: Medicament = new Medicament();
  constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.getType();
    
  }
 getType(){
   this.ser.getALLType().subscribe(
    (data) => {
      this.Type = data;
    
    },
    (err) => { console.log(err) }



  )
}
 
  savepfe(){
 
    this.ser.add(this.medicament).subscribe(
      data=>{this.route.navigate(["/liste"])},
      err=>{
        console.log(JSON.toString())
      
      }
    )
    }
  }
  
