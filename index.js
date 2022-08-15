function productFib(prod) {
  var a = 0;
  var b = 1;
  while (a * b < prod) {
    b = a + b;
    a = b - a;
  }
  return [a, b, a * b === prod];
}
console.log(productFib(4895));

//  function fib(prod){
//   var n = 0;
//   var nPlus = 1;
//   while(n*nPlus < prod) {
//     nPlus = n + nPlus;
//     n = nPlus - n;
//   }
//   return [n, nPlus, n*nPlus===prod];
// }
// console.log(fib(4895))
