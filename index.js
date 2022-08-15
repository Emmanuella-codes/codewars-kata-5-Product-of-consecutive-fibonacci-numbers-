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


