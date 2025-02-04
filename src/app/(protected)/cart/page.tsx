import CartTable from '@/components/cart/cartTable/CartTable'
import Services from '@/components/reuseable/Services'
import React from 'react'
import ShoppingCart from './ShopingCart'

const Cart = () => {
  return (
    <>
    <ShoppingCart />
      <CartTable />
      <Services />
    </>
  )
}

export default Cart
