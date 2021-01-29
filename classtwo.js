
const newHospital = require ('./classAttached.js');
class hospital{
    constructor(nam,num,bloodgroup,number,newHospital) {
        this.patient_name = nam;
        this.Id_Number = num;
        this.Blood_Group = bloodgroup;
        this.patient_floor = number;
        this.another_hospital = newHospital;
    }
}
let x =new hospital("abc",51,"O+ve","5th", new newHospital('ishwar',50,961103258))
console.log(x)