import { CardContainer, Control, Order, Price, Tags } from "./styles";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import QuantityInput from "../Form/QuantityInput";
import { useState } from "react";

interface Props {
  coffee: CoffeeType;
}

export type CoffeeType = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity?: number;
};

function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1);

  async function postCoffee(body: CoffeeType) {
    if (quantity > 0) {
      const coffeesInCartResponse = await fetch(`http://localhost:3000/cart/`);
      const json = await coffeesInCartResponse.json();

      const coffeesInCart = json.find((item: any) => item.id === coffee.id);

      if (!coffeesInCart) {
        await fetch("http://localhost:3000/cart", {
          method: "POST",
          body: JSON.stringify(body),
        });
      } else {
        // const index = json.findIndex((item: any) => item.id === coffee.id);
        await fetch(`http://localhost:3000/cart/${coffee.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            quantity: coffeesInCart.quantity + body.quantity,
          }),
        });
      }
    }
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </Tags>

      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2).replace(".", ",")}</span>
        </Price>

        <Order>
          <QuantityInput quantity={quantity} setQuantity={setQuantity} />

          <button onClick={() => postCoffee({ ...coffee, quantity })}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Order>
      </Control>
    </CardContainer>
  );
}

export default Card;
