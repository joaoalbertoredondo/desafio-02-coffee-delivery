import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeType } from "../components/Card";

interface CartContextType {
  coffees: CoffeeType[];
  cart: CoffeeType[];
  refreshCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeType[]>([]);
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);

  async function loadCoffeesInCart() {
    const response = await fetch("http://localhost:3000/cart");
    const coffeesInCartFromJson = await response.json();

    setCart(coffeesInCartFromJson);
  }

  useEffect(() => {
    loadCoffeesInCart();
  }, []);

  async function loadCoffees() {
    const response = await fetch("http://localhost:3000/coffees");
    const coffeesFromJson = await response.json();

    setCoffees(coffeesFromJson);
  }

  useEffect(() => {
    loadCoffees();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, coffees, refreshCart: loadCoffeesInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
