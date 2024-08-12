import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Box, BoxHeader, Details, SuccessContainer } from "./styles";
import deliveryImg from "../../assets/deliver.png";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { newOrderFormData } from "../Cart";

function Success() {
  const theme = useTheme();

  const [searchParams, _] = useSearchParams();
  const [address, setAddress] = useState<newOrderFormData>();
  const id = searchParams.get("id");

  async function loadAddress() {
    const res = await fetch(`http://localhost:3000/orders/${id}`);

    const dataJson = await res.json();

    setAddress(dataJson.address);
  }

  useEffect(() => {
    loadAddress();
  }, []);

  function paymentText(type: string) {
    if (type === "credito") {
      return "Cartão de Crédito";
    } else if (type === "debito") {
      return "Cartão de Débito";
    } else {
      return "Dinheiro";
    }
  }

  return (
    <SuccessContainer>
      <Box>
        <BoxHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </BoxHeader>

        <section>
          <Details>
            <div>
              <div>
                <MapPin
                  size={32}
                  weight="fill"
                  color={theme["base-background"]}
                  style={{ backgroundColor: theme.purple }}
                />
                <div>
                  <span>
                    Entrega em{" "}
                    <strong>
                      {address?.rua || "Rua João Daniel Martinelli"},{" "}
                      {address?.num || "102"}
                      {address?.comp}
                    </strong>
                  </span>
                  <span>
                    {address?.bairro || "Farrapos"} -{" "}
                    {address?.cidade || "Porto Alegre"}, {address?.uf || "RS"}
                  </span>
                </div>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme["base-background"]}
                  style={{ backgroundColor: theme.yellow }}
                />
                <div>
                  <span>Previsão de enterga</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </div>

              <div>
                <CurrencyDollar
                  size={32}
                  weight="fill"
                  color={theme["base-background"]}
                  style={{ backgroundColor: theme["yellow-dark"] }}
                />
                <div>
                  <span>Pagamento na entrega</span>
                  <strong>
                    {paymentText(address?.selectedPaymentOption || "credito")}
                  </strong>
                </div>
              </div>
            </div>
          </Details>

          <img src={deliveryImg} alt="" />
        </section>
      </Box>
    </SuccessContainer>
  );
}

export default Success;
