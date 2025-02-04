import { Breadcrumb } from '@/components/reuseable/Hero2'
import React from 'react'
import ProductComparisionComp from './ProductComparison'

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
    </div>
  )
}

export default ProductComparision
