(()=> {
  let isNew:boolean = false;
  let productPrice = 100;

  let productTitle = 'My Amazing Title';
  productTitle = null;
  productTitle = () => {};
  productTitle = 123;
  productTitle = 'Title changed';
  console.log('productTitle',productTitle);

  const description = "bla bla bla";
  console.log('description',description);

  const summary = `
  title: ${productTitle},
  description: ${description}
  price: ${productPrice}
  isNew: ${isNew}
  `;

  console.log(summary);

})();
