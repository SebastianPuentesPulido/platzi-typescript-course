(()=> {
  const login = (data:{email:string,password:number}) => {
    console.log(data.email,data.password);
  }

  login({email:'example@example.com',password:12213})

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = { title:string,
    createdAt:Date,
    stock:number,
    size?:Sizes};

  const products:Product[] = [];

  const addProduct = (data:Product) => {
    products.push(data);
  }

  addProduct({
    title:'PC Master Race',
    createdAt: new Date(1991,25,12),
    stock:123
  });

  addProduct({
    title:'PC Master Race',
    createdAt: new Date(1991,25,12),
    stock:123,
    size:'XL'
  });

  products.push({
    title:'producto1',
    createdAt:new Date(1991,25,12),
    stock:1233,
    size:'XL'
  });

  console.log(products);
})();
