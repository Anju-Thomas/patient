export class Patient {
    name:string
    address:string
    mobilenumber:number
    phone:number
    email:string
    profession:string
    contactperson:string 
    nationalid:string
    passport:number

constructor(name:string,address:string, mobilenumber:number, phone:number,email:string,profession:string,contactperson:string ,nationalid:string,passport:number){
      this.name=name
      this.address=address
      this.mobilenumber=mobilenumber
      this.phone=phone
      this.email=email
      this.profession=profession
      this.contactperson=contactperson
      this.nationalid=nationalid
      this.passport=passport
    }
}
