import { Product } from "./product.model"

// type createProductDto = Omit<Product,'id' | 'createdAt' | 'updatedAt' | 'category'>;
type Example = Pick<Product,'category'| 'color' | 'isNew'>

// required all props
type Example2 = Required<Product>;

export interface createProductDto extends Omit<Product,'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId:string
}
// optional props for product
export interface UpdateProductDto extends Partial<createProductDto>{

}

export interface FindProductsDto extends Readonly<Partial<Omit<Product,'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}

// Read Only Params
// type example3 = Readonly<Product>;
