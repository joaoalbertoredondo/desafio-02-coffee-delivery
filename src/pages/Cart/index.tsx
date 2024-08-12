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
  Coffee,
  Details,
  Info,
  Payment,
  PaymentHeader,
  PaymentOptions,
  Price,
  SelectedCoffees,
  Separator,
} from "./styles";

import QuantityInput from "../../components/Form/QuantityInput";
import { priceFormatter } from "../../utils/formatter";
import { zodResolver } from "@hookform/resolvers/zod";
import { CoffeeType } from "../../components/Card";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

export type newOrderFormData = zod.infer<
  typeof newOrderFormValidationSchema
> & { selectedPaymentOption?: string };

export type newOrder = {
  address: newOrderFormData;
  items: CoffeeType[];
};

const newOrderFormValidationSchema = zod.object({
  comp: zod.string().optional(),
  rua: zod.string().min(1, "Informe a Rua"),
  num: zod.number().min(1, "Informe o Número"),
  cidade: zod.string().min(1, "Informe a Cidade"),
  bairro: zod.string().min(1, "Informe o Bairro"),
  cep: zod.string().min(10, "CEP invalido").max(10, "CEP invalido"),
  uf: zod
    .string()
    .min(1, "Informe o Estado")
    .max(2, "O Estado deve conter 2 caracteres"),
});

function Cart() {
  const { cart } = useContext(CartContext);

  const { register, handleSubmit, watch } = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeType[]>([]);

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  const watchUf = watch("uf");
  const watchCep = watch("cep");
  const watchRua = watch("rua");
  const watchNum = watch("num");
  const watchBairro = watch("bairro");
  const watchCiadde = watch("cidade");

  const isSubmitDisabled =
    !watchUf ||
    !watchCep ||
    !watchRua ||
    !watchNum ||
    !watchBairro ||
    !watchCiadde ||
    !selectedPaymentOption;

  const shippingPrice = 3.5;

  function handlePaymentOption(value: string) {
    setSelectedPaymentOption(value);
  }

  let navigate = useNavigate();

  async function handleOrderCheckout(data: newOrderFormData) {
    const consolidatedData = {
      ...data,
      selectedPaymentOption,
    };

    const order: newOrder = {
      address: consolidatedData,
      items: coffeesInCart,
    };

    const orderResponse = await postNewOrder(order);

    async function postNewOrder(body: newOrder) {
      return fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify(body),
      });
    }

    async function cleanCart(id: string) {
      await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      });
    }

    const jsonOrder = await orderResponse.json();

    for (const coffee of coffeesInCart) {
      await cleanCart(coffee.id);
    }

    await loadCoffeesInCart();

    let path = `/success?id=${jsonOrder.id}`;

    navigate(path);
  }

  const { refreshCart } = useContext(CartContext);

  async function loadCoffeesInCart() {
    setCoffeesInCart(cart);

    let total = 0;

    cart.map((item: CoffeeType) => {
      total = total + item.price * (item.quantity || 1);

      setTotalItemsPrice(total);
    });

    refreshCart();
  }

  useEffect(() => {
    loadCoffeesInCart();
  }, []);

  async function editCoffeeQuantity(newQuantity: number, id?: string) {
    await fetch(`http://localhost:3000/cart/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        quantity: newQuantity,
      }),
    });
    await loadCoffeesInCart();
  }

  async function removeCoffee(id: string) {
    await fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    });

    await loadCoffeesInCart();
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
                type="text"
                placeholder="CEP"
                id="sm"
                {...register("cep")}
              />

              <input type="text" placeholder="Rua" {...register("rua")} />

              <div>
                <input
                  type="number"
                  placeholder="Número"
                  id="sm"
                  {...register("num", { valueAsNumber: true })}
                />

                <input type="text" placeholder="Complemento" id="cp" />
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
          {coffeesInCart.map((coffee) => {
            return (
              <div key={coffee.id}>
                <Coffee>
                  <img src={coffee.image} alt="" />
                  <Details>
                    <section>
                      <span>{coffee.title}</span>
                      <div>
                        <QuantityInput
                          quantity={coffee.quantity || 1}
                          id={coffee.id}
                          setQuantity={editCoffeeQuantity}
                        />
                        <button onClick={() => removeCoffee(coffee.id)}>
                          <Trash size={16} />
                          Remover
                        </button>
                      </div>
                    </section>
                    <Price>
                      {priceFormatter.format(
                        coffee.price * (coffee.quantity || 1)
                      )}
                    </Price>
                  </Details>
                </Coffee>

                <Separator />
              </div>
            );
          })}

          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>{priceFormatter.format(totalItemsPrice)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{priceFormatter.format(shippingPrice)}</span>
            </div>

            <section>
              <span>Total</span>
              <span>
                {priceFormatter.format(totalItemsPrice + shippingPrice)}
              </span>
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
