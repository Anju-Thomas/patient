import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Patient} from '../patient'
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  model=new Patient()


  constructor(private service:PatientService) { }
    patientlist:Patient[];

  

  ngOnInit(): void {
    this.service.readpatient().subscribe(data=>{
      console.log("Data received.....",data)
      this.patientlist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Patient
      })
    })
  }
   save()
   console.log(this.model)
   if(this.model.did==null){
     this.service.savePatient(this.model)
   }else{
     this.service.updatePatient(this.model)
   }
}
    new(patient){
      this.model=student
    }
    delete(student){
    this.model=student
    }
