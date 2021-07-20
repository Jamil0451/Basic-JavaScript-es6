var fetch = require('node-fetch');  // import
// async await

async function myResponse() {
    
    const res = await fetch('https://reqres.in/api/users?delay=3');
    const body = await res.json();
    console.log(body);

}

myResponse();