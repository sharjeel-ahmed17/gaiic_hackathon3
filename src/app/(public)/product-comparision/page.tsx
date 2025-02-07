import { Hero2 } from '@/components/resuable/Hero2'
import React from 'react'
import ProductComparisionComp from './ProductComparison'
import ProductComparisonGrid from './ProductComparisonComp'

const ProductComparision = () => {
  return (
    <div>
      <Hero2 title='Product-Comparison' />
      <ProductComparisionComp />
      <ProductComparisonGrid />

    </div>
  )
}

export default ProductComparision
