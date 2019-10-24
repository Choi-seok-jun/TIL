function foo() {
  console.log("Hello!");
}
function bar() {
  foo();
  console.log("Bye");
}
function hoo() {
  bar();
  console.log("Help");
}
console.log("start");
hoo();
console.log("End!");
