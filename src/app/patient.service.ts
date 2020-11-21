import { Injectable } from '@angular/core';
import { Patient } from './patient';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private obj:AngularFirestore) { }
   save(patient:Patient){
     console.log("inside service",patient)
     this.obj.collection("patient").add({...patient})
   }
 

       readPatient(){
         return this.obj.collection("patientdata").snapshotChanges()
    
  }
   updatePatient(patient){
     this.obj.doc("patientdata/"+patient.did).update({...patient})
   }
   deletePatient(patient){
     this.obj.doc("patientdata/"+patient.did).delete
   }
}
