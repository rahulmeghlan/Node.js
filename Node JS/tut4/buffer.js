var buffer1 = new Buffer('Rahul Meghlan');
var buffer2 = new Buffer(10);

buffer1.copy(buffer2, 0, 0, 5);

console.log(">>>> Checking the buffer object");
console.log(buffer1.toString());
console.log(buffer2.toString());
console.log(">>>> End");