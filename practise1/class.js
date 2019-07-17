var Student = /** @class */ (function () {
    function Student(stud, secret) {
        var studName = stud.studName, className = stud.className, rollNo = stud.rollNo, subjects = stud.subjects;
        this.studName = studName;
        this.className = className;
        this.rollNo = rollNo;
        this.subjects = subjects;
        this.secret = secret;
        console.log(this.className, this.rollNo); //console
    }
    return Student;
}());
var s = new Student({ studName: "Aaaa", className: "III", rollNo: 11100, subjects: ['abc', 'def'] }, 'KJDBKFJBSDKFJb'); //Aaaa III 11100 abc,def
document.body.textContent = s.studName + " " + s.subjects + " " + s.secret;
module.exports = { Student: Student };
