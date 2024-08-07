import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeType } from "../components/Card";

interface CartContextType {
  cart: CoffeeType[];
  refreshCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffes, setCoffes] = useState<CoffeeType[]>([]);

  async function loadCoffeesInCart() {
    const response = await fetch("http://localhost:3000/cart");
    const coffeesInCartFromJson = await response.json();

    setCoffes(coffeesInCartFromJson);
  }

  useEffect(() => {
    loadCoffeesInCart();
  }, []);

  useEffect(() => {
    console.log(coffes);
  }, [coffes]);

  return (
    <CartContext.Provider
      value={{ cart: coffes, refreshCart: loadCoffeesInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
