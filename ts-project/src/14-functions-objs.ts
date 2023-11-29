(()=> {
  const login = (data:{email:string,password:number}) => {
    console.log(data.email,data.password);
  }

  login({email:'example@example.com',password:12213})

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products:any[] = [];

  const addProduct = (data:{
    title:string,
    createdAt:Date,
    stock:number,
    size?:Sizes
  }) => {
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
  console.log(products);
})();
