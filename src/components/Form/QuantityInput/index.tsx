import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";

function QuantityInput() {
  return (
    <QuantityInputContainer>
      <button>
        <Minus size={14} />
      </button>
      1
      <button>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}

export default QuantityInput;
