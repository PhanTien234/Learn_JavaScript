const readLine = require("readline-sync")

let text_day = readLine.question("Input day ")
let month = Number(text_day)
var diw = month % 7

switch (diw){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Please enter the number 1 to 7")
}
    
