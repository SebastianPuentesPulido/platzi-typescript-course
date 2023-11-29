(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice);
  let customerAge: number = 28;
  customerAge = customerAge + 1; // 281
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock',productInStock);

  if (productInStock > 10) {
    console.log('is more than 10');
  }

  let discount = parseInt('100');

  console.log('discount',discount);

  if (discount <= 200) {
    console.log("apply");
  } else {
    console.log("not apply");
  }

  let hex = 0xfff;
  console.log('hex',hex);
  let bin = 0b10101; // 21
  console.log('bin',bin);

  const myNumber:number = 10;
})();
