(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  // const createProductToJsonV2 = (title: string,
  //   createdAt: Date,
  //   stock: number,
  //   size: Sizes = 'L'
  // ) =>  {
  //   return {
  //     title,
  //     createdAt,
  //     stock,
  //     size
  //   }
  // }

  const createProductToJsonV2 = (title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) =>  {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('PC', new Date(), 12, 'XL');
  console.log('producto 1', producto1);
  console.log(producto1.createdAt);
  console.log(producto1.stock);
  console.log(producto1.size);
  console.log(producto1.title+"\n");

  const producto2 = createProductToJsonV2('pc master race',new Date(),123);
  console.log('producto2',producto2);
  console.log(producto2.title);
  console.log(producto2.createdAt);
  console.log(producto2.stock);
  console.log(producto2.size);
})();
