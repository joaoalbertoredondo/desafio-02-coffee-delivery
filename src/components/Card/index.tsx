import { CardContainer, Control, Order, Price, Tags } from "./styles";
import QuantityInput from "../Form/QuantityInput";
import { ShoppingCartSimple } from "@phosphor-icons/react";

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
};

function Card({ coffee }: Props) {
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
          <QuantityInput />

          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Order>
      </Control>
    </CardContainer>
  );
}

export default Card;
