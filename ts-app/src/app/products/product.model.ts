import {BaseModel} from '../base.model';
import {Category} from '../categories/category.model'
type Sizes = 'XL' | 'M' | 'S' | 'L';

export interface Product extends BaseModel{
  title: string,
  stock: number,
  image:string,
  description:string,
  size?: Sizes,
  color:string,
  price:number,
  category:Category,
  isNew:boolean,
  tags:string[],
}
