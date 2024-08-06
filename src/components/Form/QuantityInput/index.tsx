import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  quantity: number;
  id?: string;
  setQuantity: (quantity: number, id?: string) => void;
}

function QuantityInput({ quantity, id, setQuantity }: QuantityInputProps) {
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1, id);
    }
  }

  function incrementQuantity() {
    setQuantity(quantity + 1, id);
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
