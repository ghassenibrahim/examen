import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
medicament: any = []
constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.getAllM();
  }
  getAllM(){
    this.ser.getAllMedicament().subscribe(
      (data) => {
        this.medicament = data;
      
      },
      (err) => { console.log(err) }



    )
  }
  delete(id:number){
    this.ser.delete(id).subscribe
    (
      data => {
       
        this.getAllM();
        this.route.navigate(["/liste"])
      },
      error => console.log(error));
}


}