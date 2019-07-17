class eVerification {
    aadhar: String
    esign: String
    photo: String

    constructor(aadhar: String){
        this.aadhar = aadhar
        this.esign= 'StringE'
        this.photo= 'StringP'
    }

    getEsign() {return {esign:this.esign, photo: this.photo}}
}

class PAN  extends eVerification {
    firstName : String
    lastName : String
    middleName : String
    constructor (aadhar: String, firstName: string, middleName: String, lastName: String){
        super(aadhar) //initing super eVerification
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
    }

    getmyEsign(){
        return super.getEsign()
    }
}

let verifyPAN = new PAN('1234567891234', 'myFirstName', 'myMidName','MyLastNamr') //a PAN
console.log(verifyPAN.getmyEsign())
document.body.textContent = "See console"