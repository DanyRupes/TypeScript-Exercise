interface StudentProps  {
    studName: String
    className: String
    rollNo: number
    subjects: Array<String>
}

class Student {
    studName: String
    private className : String
    private rollNo : number
    subjects: Array<String>
    secret: String
    
    constructor (stud: StudentProps,  secret:String) {
        let {studName, className, rollNo, subjects } = stud
        this.studName = studName
        this.className = className
        this.rollNo = rollNo
        this.subjects = subjects
        this.secret = secret
        console.log(this.className, this.rollNo) //console
    }
}

let s  = new Student({studName:"Aaaa",    className: "III",    rollNo: 11100,    subjects:['abc','def']}, 'KJDBKFJBSDKFJb')  //Aaaa III 11100 abc,def

document.body.textContent = `${s.studName} ${s.subjects} ${s.secret}`
