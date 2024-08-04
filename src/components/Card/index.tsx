import { CardContainer, Control, Order, Price, Tag } from "./styles";
import image from "../../assets/coffees/americano.png";
import QuantityInput from "../Form/QuantityInput";
import { ShoppingCart } from "@phosphor-icons/react";

function Card() {
  return (
    <CardContainer>
      <img src={image} alt="" />

      <Tag>Tradicional</Tag>

      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <Control>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>

        <Order>
          <QuantityInput />

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Order>
      </Control>
    </CardContainer>
  );
}

export default Card;
