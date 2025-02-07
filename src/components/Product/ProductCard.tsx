'use client';
import Image from 'next/image'
import { Product } from "@/interfaces/Product";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { urlFor } from '@/sanity/lib/image';
import { discountPercentage } from '@/lib/dicountPercentage';
import { useCart } from '@/contexts/cartContext'
import { useEffect, useState } from 'react';
import { cartObject, wishListObject } from '@/lib/object';
import { useWishList } from '@/contexts/WhishListContext';
import Link from 'next/link';


const ProductCard = ({ product }: { product: Product }) => {
  // import cart form cartContext
  const { addProdToCart, cart } = useCart()

  // import wish list from wihsList context
  const { addProdToWishList, wishList } = useWishList()

  // use the state varables to track any change in cart add the addedtocart become true
  // and by which the user cannot add that product more times to cart where productCard use   
  const [addedToCart, setAddedToCart] = useState(false)

  //for wish list same above guide line
  const [addedToWishList, setAddedToWishList] = useState(false)



  //hndleCart send prod to cart obj for the first time
  const handleCart = () => {
    const obj = cartObject(product)
    addProdToCart(obj)
  }

  //hndleWishList send prod to WishList obj for the first time
  const handleWishList = () => {
    const obj = wishListObject(product)
    addProdToWishList(obj)
  }

  // run useeffect to check if something in cart when add or run first time
  useEffect(() => {
    const cartItem = cart.find((cartItem) => cartItem.productId === product._id)
    if (cartItem) {
      setAddedToCart(true)
    }
  }, [cart])

  // run useeffect to check if something in WishList when add or run first time
  useEffect(() => {
    const wishListItem = wishList.find((wishListItem) => wishListItem.productId === product._id)
    if (wishListItem) {
      setAddedToWishList(true)
    }
  }, [wishList])

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
      {/* Product Image */}

      <div className="relative">
        <Image src={urlFor(product.thumbnail).url()} alt={product.name} width={500} height={500} className="w-full h-64 object-cover" />


        {/* Discount or New Label */}
        <div className="absolute top-4  flex justify-between items-center w-full  px-2">
          {product.discountPrice > 0 && (
            <span className=" bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {discountPercentage(product.price, product.discountPrice)}
            </span>
          )}
          {product.isNew && (
            <span className=" bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </span>
          )}

        </div>
      </div>


      {/* Hover Overlay (Now controlled via group-hover) */}
      <Link href={`/shop/${product._id}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">


          <button className={`${addedToCart ? 'text-white bg-[#B88E2F]' : 'bg-white text-black'} px-4 py-2 text-sm rounded-md font-semibold`} onClick={handleCart} disabled={addedToCart}>
            {addedToCart ? "Added" : "Add to cart"}
          </button>



          <div className="flex gap-4 text-white">
            <button className="flex items-center gap-1 text-sm">
              <Share2 size={16} /> Share
            </button>
            <button className="flex items-center gap-1 text-sm">
              <ShoppingCart size={16} /> Compare
            </button>
            <button className="flex items-center gap-1 text-sm" onClick={handleWishList} disabled={addedToWishList}>
              <Heart size={16} fill={addedToWishList ? 'red' : 'transparent'} /> Like
            </button>
          </div>
        </div>
      </Link >
      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm truncate">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-black font-bold">{product.discountPrice > 0 ? product.discountPrice : product.price}</span>
          {product.discountPrice > 0 && (
            <span className="text-gray-400 line-through">{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard