// var test="add";
// var var1 = 1;
// var var2 = 2;
// var var3 = true;
// console.log(var1 === var3);  //==, === (truthy/falsy)

// function myFunc() {
//     //console.log("Test");
//     return "Test";
// }

// var var2 = myFunc();
// console.log(var2);


//switch

// function day(myNumber){
  
//     //console.log("Inside function day()" + myNumber);
    
//     switch(myNumber){
//         case 0:
//             console.log("Sunday");
//             break;
//         case 1:
//             console.log("Monday");
//             break;
//         case null:
//             console.log("Undefined");
//             break;
//         default:
//             console.log("No date");
//     }
// }

// day();


//Conditionals -- FizzBuzz
//Write a

function fizzbuzz(){
    for (var i=1; i <= 30; i++){
        //console.log(i);

        if (i%3==0 && i%5==0){
            console.log("fizzbuzz")
        }
        else if (i % 3 == 0){
            console.log("fizz");
        }
        else if 
            (i % 5 == 0){
                console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzbuzz();