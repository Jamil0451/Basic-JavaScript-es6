//array

// function arrays() {
//     var myArray = [1,2,3,4,5];
//     console.log(typeof myArray);
//     console.log(myArray.length);
//     console.log(myArray);
// }
// arrays();


//callback

// function arrays() {
//     var myArray = [1,2,3,4,5,"test"];

//     myArray.forEach(function(i){
//         console.log(i);
//     });
// }
// arrays();

//console.log(myArray.shift());
//console.log(myArray.unshift("add"));
//console.log(myArray.push("last"));


//    myArray.splice(2,2);
//    console.log(myArray); (starts from 2, remove the next 2 elements)

//    myArray.splice(2,0, 5);
//    console.log(myArray);  (starts from 2, remove 0 elements, and add 5)

//      var var2 = myArray.indexOf(2);
//      console.log(var2);

// function arrays() {
//     var myArray = [1,2,3,4,5,"test"];

//     var var2 = myArray.slice(2);
//     console.log(var2);
// }
// arrays();


function arrays() {
    var myArray = [1,2,3,4,5,9,7,"test"];

    // var var2 = myArray.slice(2);
    console.log(
        myArray.sort().forEach(function(e) {
            console.log(e);
        }
        ));
}
arrays();