'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/cartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CartTable = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      {/* Cart Table */}
      <div className="w-full md:w-2/3">
        <div className="bg-beige-100 p-4 rounded-xl shadow-md">
          <div className="grid grid-cols-4 font-semibold text-gray-600 p-2">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <div className="border-t my-2"></div>
          {cart.map((item) => (
            <div key={item._id} className="grid grid-cols-4 items-center gap-4 p-2">
              <Image
              width={20}
              height={20}
                src={urlFor(item.thumbnail).url()}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <span className="text-gray-500">{item.name}</span>
              <span className="text-gray-500">Rs. {item.price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <Button onClick={() => decreaseQuantity(item._id)} className="p-1" size="icon">
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button onClick={() => increaseQuantity(item._id)} className="p-1" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
                <Trash2 className="text-gold-500 cursor-pointer" onClick={() => removeFromCart(item._id)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Totals */}
      <Card className="w-full md:w-1/3 bg-beige-100 p-6 rounded-xl shadow-md">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Cart Totals</h2>
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-gold-500 text-lg">
            <span>Total</span>
            <span>Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <Button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Check Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartTable;
