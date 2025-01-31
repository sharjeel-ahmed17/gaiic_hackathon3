import { Product } from '@/interfaces/Product'
import React from 'react'
import ProductCard from './ProductCard'

 

const ProductListing = ({products}:{products:Product[]}) => {
  return (
    <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
              products.map((e, i) => (
                  <ProductCard product={e} key={i}/>
              ))
      }
    </div>
  )
}

export default ProductListing
