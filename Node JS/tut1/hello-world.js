setTimeout(function() {
  console.log("world");
}, 2000);

function foo() {
  debugger;
  return 1 + 2;
}

console.log("hello");
