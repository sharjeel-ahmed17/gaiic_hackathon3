import { Breadcrumb } from '@/components/reuseable/Hero2'
import React from 'react'
import ProductComparisionComp from './ProductComparison'
import ProductComparisonGrid from './ProductComparisonComp'

const ProductComparision = () => {
  return (
    <div>
      <Breadcrumb
                title="Shop"
                backgroundImage="/images/hero2.jpg"
                links={[
                    { name: "Home", href: "/" },
                    { name: "Shop", href: "/shop" },
                ]}
            />
            <ProductComparisionComp />
<ProductComparisonGrid/>
        
    </div>
  )
}

export default ProductComparision
