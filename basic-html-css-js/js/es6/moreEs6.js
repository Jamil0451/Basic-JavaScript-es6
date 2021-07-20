//function with default value

function myFn(var1, var2 = 5) {
    console.log(var1 + var2);
}
// myFn("Hello ");   error, var 2 is undefined

// myFn(2,10);

const myArray = [1,2,3,4,5];
//const myArray2 = [6,7,8];

function myArrayFn(var1, ...var3) {
    console.log(var1);
    console.log(var3);

}

// myArrayFn(10,1,2,3,4,5,6);

// Spread operator
const newArray  = [10,11,12, ...myArray];
//const newArr = myArray + myArray2;
console.log(newArray);
console.log(newArr);


