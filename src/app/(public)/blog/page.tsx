"use client"
import { Breadcrumb } from '@/components/reuseable/Hero2'
import { useCart } from '@/contexts/cartContext'
import React from 'react'
import BlogPage from './BlogPage'

const Blog = () => {
  const {cart}  = useCart();
  console.log('cart',cart);
  
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
      <BlogPage />
    </div>
  )
}

export default Blog
