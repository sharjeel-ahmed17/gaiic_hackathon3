'use client';

import { CartItem } from '@/interfaces/cart';
import { Product } from '@/interfaces/Product';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';




interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (_id: number) => void;
  clearCart: () => void;
  increaseQuantity: (_id: number) => void;
  decreaseQuantity: (_id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch {
        setCart([]);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (_id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (_id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (_id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === _id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
