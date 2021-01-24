// // const readline = require("readline");
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // rl.question("", function(number) {
// //     rl.question("", function(word) {
// //         for (let i = 0; i < number; i ++) {
// //           console.log(word)
// //         }
// //         rl.close();
// //     });
// // });

// // rl.on("close", function() {
// //     process.exit(0);
// // });


// // Another
// //Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

// // process.stdin.resume("jhghj");
// // process.stdin.setEncoding('utf8');
// // var util = require('util');
// // var input = "";

// // process.stdin.once('data', function (number) {
// //     process.stdin.once('data', function(word) {
// //         for (let i = 0; i <= Number(number); i++) {
// //             console.log(word);
// //         }
// //     })
// // });

// //Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug



// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readline() {
//     return inputString[currentLine++];
// }
// // Make a Snippet for the code above this and then write your logic in main();


// function main() {
//     const x = readline();
//     var line2 = readline(); 
    
//     foo(x);
//     foo(line2);
// }
// function foo(x) {
//     process.stdout.write("hello: ");   // without auto '\n' (newline)
//     console.log(x);  // with auto '\n' (newline)
// }

function doubleReject() {
    return new Promise((reject) => {
        reject(Promise.reject('something'))
    })
}

doubleReject()
.then(result => console.log('result: something'))
.catch(error => console.log(`first catch: ${error}`))
.catch(error => console.log(`second catch: ${error}`))