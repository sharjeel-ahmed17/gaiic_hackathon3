import React from 'react'
import Breadcrumb from './ProductBreadCrumb'
import ProductDetailsComp from '@/components/Product/ProductDetails'
import ProductDescriptionTabBr from '@/components/Product/ProductTabBar'

const ProductDetails = () => {
  return (
    <div>
        <Breadcrumb />
        <ProductDetailsComp />
        <ProductDescriptionTabBr/>

    </div>
  )
}

export default ProductDetails