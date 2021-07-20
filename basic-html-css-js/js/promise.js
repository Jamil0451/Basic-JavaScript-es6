var fetch = require('node-fetch');  // import

// var result = fetch('https://reqres.in/api/users?delay=3');
// console.log(result);

fetch('https://reqres.in/api/users?delay=3')
.then (function (value) {
    value.json()
    .then(function (a) {
        console.log(a);
    }).catch(function(e){
        console.log("Exception from nested")
    });
}).catch(function(e){
    console.log("Exception occured");
});