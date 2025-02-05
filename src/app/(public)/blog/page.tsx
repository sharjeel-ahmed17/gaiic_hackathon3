"use client"
import { Hero2 } from '@/components/reuseable/Hero2'
import { useCart } from '@/contexts/cartContext'
import React from 'react'
import BlogPage from './BlogPage'

const Blog = () => {
  const {cart}  = useCart();
  console.log('cart',cart);
  
  return (
    <div>
 <Hero2 title='Blog'/>
      <BlogPage />
    </div>
  )
}

export default Blog
