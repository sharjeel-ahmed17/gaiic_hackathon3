"use client";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/interfaces/Product";
import { ShoppingCart, Heart, Share2, Check } from "lucide-react";
import { discountPercentage } from "@/lib/dicountPercentage";
import { useCart } from "@/contexts/cartContext";
import { urlFor } from "@/sanity/lib/image";
import toast from "react-hot-toast";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    // toast(`✔ ${product.name} is added successfully`)
    toast.success(`${product.name} is added successfully` , {
      icon : <Check color="green"/>
    })
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      {/* Product Image */}
      <Link href={`/shop/${product._id}`}>opwn </Link>
      <Image
        src={urlFor(product.thumbnail).url()}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />

      {/* Discount Badge */}
      {product.discountPrice > 0 && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {discountPercentage(product.price, product.discountPrice)} OFF
        </span>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className={`px-4 py-2 text-sm rounded-md font-semibold ${addedToCart ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-white text-black hover:bg-gray-300'}`}
          onClick={handleAddToCart}
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
        <div className="flex gap-4 text-white">
          <button className="flex items-center gap-1 text-sm hover:text-gray-300">
            <Share2 size={16} /> Share
          </button>
          <button className="flex items-center gap-1 text-sm hover:text-gray-300">
            <ShoppingCart size={16} /> Compare
          </button>
          <button className="flex items-center gap-1 text-sm hover:text-gray-300">
            <Heart size={16} /> Like
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm truncate">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-black font-bold">
            ${product.discountPrice > 0 ? product.discountPrice : product.price}
          </span>
          {product.discountPrice > 0 && (
            <span className="text-gray-400 line-through">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
