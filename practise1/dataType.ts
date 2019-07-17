
// let variableName : dataType = Value
// let u : String = 'isName'

// let myTyp : boolean = true
// let myNam : String = `my name is dev ${myTyp}`

// Array : same data types
// let myValArrayNum : Array<number> = [1,2,3]
// let myValArrayString : Array<String> = ['1','2','3']
// let myValueString : number[] = [1,2,3]
// let myValueNum : string[] = ['1','2','3']


// Tuple: Different type of array elements
// let tupleSample :  [string, number]
// tupleSample = ['HelloCountedNums', 10] 
// let x: [string, number]; 
// x = ["hello", 10];


// Enum : 
// enum Colors {green=10, white, black}
// // if first value is 10 next white will take 11, black is 12

// // function getColor(color : Colors){return color}
// function getColor(){
//     // let  col : Colors = Colors.white //11
//     let  col : any = Colors[10] //green
//     return col
// }
// getColor(Colors.green)



// let interests : any[] = ['2.0%',3,50]
// let interests : number[] = [2.0, 3, 50] //only numbers
// let interests : any[] = [1,2,3,4]

// interests[1] = 100
// interests //1,100,3,4

// function getNoth() : void {
    
//     // return "Did this out"
// }

// let u : undefined = undefined //undefined
// let u : null = null //undefined
// let u : undefined = 10 //Error type 10 is not assingable to undefined





// Never: 

// function heyNever (msg: string): never { //not good finishing return like 10+10=20 return 20. throw only exception
//     throw new Error(msg) 
// }


// function doYouBelieveHuman(){
//     return heyNever('when never is used? this have to throw exception: return some value')
// }

// doYouBelieveHuman() //i console msg(err) will display
// function create(o: object | null ){

//     return o
// }

// create({ prop: 0 }); // OK
// create(null); // OK

// create(undefined) //nothing will display
// create('un') //error
// create(785) //error



// Type assertions 

// let someVal : string = 'skjdgnsdf'

// let totalChar : any = (<string>someVal).length 

//9

// document.body.textContent = totalChar