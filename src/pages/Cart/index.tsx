import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";

import {
  Address,
  AddressForm,
  AddressHeader,
  CartContainer,
  CartTotal,
  CoffeeCard,
  Details,
  Info,
  Payment,
  PaymentHeader,
  PaymentOptions,
  Price,
  SelectedCoffees,
  Separator,
} from "./styles";

import { useState } from "react";
import imageTest from "../../assets/coffees/arab.png";
import QuantityInput from "../../components/Form/QuantityInput";
import { priceFormatter } from "../../utils/formatter";
import { useForm } from "react-hook-form";

function Cart() {
  const { register, handleSubmit, watch } = useForm();

  const shippingPrice = 3.5;

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  function handleOrderCheckout(data: any) {
    const consolidatedData = {
      ...data,
      selectedPaymentOption,
    };

    console.log(consolidatedData);
  }

  const watchUf = watch("uf");
  const watchCep = watch("cep");
  const watchRua = watch("rua");
  const watchNum = watch("num");
  const watchComp = watch("comp");
  const watchBairro = watch("bairro");

  const isSubmitDisabled =
    !watchUf ||
    !watchCep ||
    !watchRua ||
    !watchNum ||
    !watchComp ||
    !watchBairro ||
    !selectedPaymentOption;

  function handlePaymentOption(value: string) {
    setSelectedPaymentOption(value);
  }

  return (
    <CartContainer>
      <Info>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <Address>
            <AddressHeader>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeader>

            <AddressForm>
              <input
                type="number"
                placeholder="CEP"
                id="sm"
                {...register("cep", { valueAsNumber: true })}
              />

              <input type="text" placeholder="Rua" {...register("rua")} />

              <div>
                <input
                  type="number"
                  placeholder="Número"
                  id="sm"
                  {...register("num", { valueAsNumber: true })}
                />

                <input
                  type="text"
                  placeholder="Complemento"
                  id="cp"
                  {...register("comp")}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bairro"
                  id="sm"
                  {...register("bairro")}
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  id="ct"
                  {...register("cidade")}
                />

                <input
                  type="text"
                  placeholder="UF"
                  id="uf"
                  {...register("uf")}
                />
              </div>
            </AddressForm>
          </Address>
        </form>

        <Payment>
          <PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>

          <PaymentOptions>
            <button
              onClick={() => handlePaymentOption("credito")}
              className={selectedPaymentOption === "credito" ? "selected" : ""}
            >
              <CreditCard size={16} />
              <span>cartão de crédito</span>
            </button>

            <button
              onClick={() => handlePaymentOption("debito")}
              className={selectedPaymentOption === "debito" ? "selected" : ""}
            >
              <Bank size={16} />
              <span>cartão de débito</span>
            </button>

            <button
              onClick={() => handlePaymentOption("dinheiro")}
              className={selectedPaymentOption === "dinheiro" ? "selected" : ""}
            >
              <Money size={16} />
              <span>dinheiro</span>
            </button>
          </PaymentOptions>
        </Payment>
      </Info>

      <Info>
        <h2>Cafés selecionados</h2>

        <SelectedCoffees>
          <CoffeeCard>
            <img src={imageTest} alt="" />

            <Details>
              <section>
                <span>Expresso Tradicional</span>

                <div>
                  <QuantityInput />
                  <button>
                    <Trash size={16} />
                    Remover
                  </button>
                </div>
              </section>

              <Price>R$9,90</Price>
            </Details>
          </CoffeeCard>

          <Separator />

          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>R$ 9,90</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{priceFormatter.format(shippingPrice)}</span>
            </div>

            <section>
              <span>Total</span>
              <span>R$ 13,40</span>
            </section>
          </CartTotal>

          <button type="submit" form="order" disabled={isSubmitDisabled}>
            confirmar pedido
          </button>
        </SelectedCoffees>
      </Info>
    </CartContainer>
  );
}

export default Cart;
