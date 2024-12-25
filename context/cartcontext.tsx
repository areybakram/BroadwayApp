import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for cart items
type CartItem = {
  id: number; // unique identifier
  name: string;
  price: number;
  image?: any; // Optional image
  quantity: number;
};

// Define the CartContext type
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
};

// Create Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider to manage cart state
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
