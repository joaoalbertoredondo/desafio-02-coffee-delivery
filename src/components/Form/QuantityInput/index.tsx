import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";
import { useState } from "react";

function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      {quantity}
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}

export default QuantityInput;
