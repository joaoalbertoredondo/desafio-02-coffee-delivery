import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Box, BoxHeader, Details, SuccessContainer } from "./styles";
import deliveryImg from "../../assets/deliver.png";
import { useTheme } from "styled-components";

interface ConsolidatedData {
  uf: string;
  rua: string;
  num: number;
  bairro: string;
  cidade: string;
  comp?: string | undefined;
  selectedPaymentOption: string;
}

function Success({
  uf,
  rua,
  num,
  comp,
  cidade,
  bairro,
  selectedPaymentOption,
}: ConsolidatedData) {
  const theme = useTheme();

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
                      {rua || "Rua João Daniel Martinelli"}, {num || "102"}
                      {comp}
                    </strong>
                  </span>
                  <span>
                    {bairro || "Farrapos"} - {cidade || "Porto Alegre"},{" "}
                    {uf || "RS"}
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
                    {selectedPaymentOption || "Cartão de crédito"}
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
