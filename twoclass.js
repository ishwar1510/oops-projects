class collage {
    constructor(name, num, branch, mobile,newCollage) {
        this.student_name = name;this.student_Id_Number = num;
        this.student_Branch = branch;this.student_mobile = mobile;
        this.new_collage = newCollage;}
    studentDetails() {
        console.log("student_details:", this.student_name,
            this.student_Id_Number, this.student_Branch, this.student_mobile);}
}
class newCollage{
        constructor(name,address,state,num) {
            this.collage_name = name;
            this.collage_address = address;
            this.state = state;
            this.contact_number = num;}
}
    let fullDetails = new collage("ishwar",510,"ec",962158,
    new newCollage("IIT","bangalore","karnataka",5623))

console.log(fullDetails);





// let student_details=new collage("ishwar",51,"EC",9164258)
// console.log(student_details);