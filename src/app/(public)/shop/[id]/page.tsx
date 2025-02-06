import React from 'react'
import Breadcrumb from './ProductBreadCrumb'
import ProductDetailsComp from '@/components/Product/ProductDetails'
import ProductDescriptionTabBr from '@/components/Product/ProductTabBar'

// Fetch product data from API (Server-Side)
// async function getProductById(id: string) {
//   try {
//     const res = await fetch(`http://localhost:3000/api/product/${id}`, { cache: 'no-store' }); // No cache for fresh data
//     if (!res.ok) throw new Error("Failed to fetch product");

//     const data = await res.json();
//     return data.data; // Extracting product data
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// }
// const getProductsById = ()=>{}
// const ProductDetails = async ({ params }: { params: { id: string } }) => {
const ProductDetails = async () => {

  // const product = await getProductById(params.id);

  // console.log('Product successfully fetched:');
  

  // if (!product) {
  //   return <div className="text-center text-red-500">Product not found</div>; // Handle 404 gracefully
  // }
  
  return (
    <div>
        <Breadcrumb />
        <ProductDetailsComp />
        <ProductDescriptionTabBr/>

    </div>
  )
}

export default ProductDetails