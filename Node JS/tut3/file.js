var fs = require("fs");
console.log(">>>> starting");
fs.readFile("sample.txt", function(error, success){
 console.log("Contents of the file");
 console.log(success);
});

console.log(">>>> These are the other processes that are going on in it");
