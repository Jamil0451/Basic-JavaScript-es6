// Callback func is the func that you pass in another function

function greeting(name) {
    console.log("hello " + name);
}

function processGreeting(callback) {
    var name = "Jamil";
    callback(name);
}

// processGreeting(greeting);

// Promise is a kind of a callback, but it is asynchronus callback
// It has three stages: Pending, Fulfilled, Rejected

function promiseExample( ) {
    console.log("task 1");
    setTimeout(function () {
        console.log("task 2");
    }, 3000);
    console.log("task 3");
}

promiseExample();