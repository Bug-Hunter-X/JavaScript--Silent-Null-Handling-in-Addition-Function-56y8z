function foo(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed"); //Throw error for better debugging
  }
  return a + b; 
}

//Alternative solution with default values
function foo2(a, b) {
  const aVal = a === null ? 0 : a; //Use default value if null
  const bVal = b === null ? 0 : b; //Use default value if null
  return aVal + bVal; 
}

console.log(foo2(null, 5)); // Output: 5
console.log(foo2(5, null)); // Output: 5
console.log(foo2(5, 5));   // Output: 10
//console.log(foo(null,5)); //Uncomment to see the error