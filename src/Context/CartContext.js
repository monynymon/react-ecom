import React, { createContext, useState, useEffect, useCallback } from "react";

// Create a Context for the Cart
export const CartContext = createContext();

// Create a Provider component
const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage or default to an empty array
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = JSON.parse(localStorage.getItem("cartItems"));
        return Array.isArray(savedCart) ? savedCart.filter(item => item?.id) : [];
      } catch (error) {
        console.error("Failed to parse cartItems from localStorage:", error);
        return [];
      }
    }
    return [];
  });

  // Sync cartItems with localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = useCallback((product) => {
    if (!product || !product.id) {
      console.error("Invalid product to add to cart", product);
      return;
    }
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item && item?.id === product.id
      );
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  // Function to remove items from the cart
  const removeFromCart = useCallback((productId) => {
    if (!productId) {
      console.error("Invalid productId:", productId);
      return;
    }
    setCartItems((prevItems) =>
      Array.isArray(prevItems)
        ? prevItems.filter((item) => item.id !== productId)
        : []
    );
  }, []);

  // Function to decrease quantity of a product
  const decreaseQuantity = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  // Function to increase quantity of a product
  const increaseQuantity = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
