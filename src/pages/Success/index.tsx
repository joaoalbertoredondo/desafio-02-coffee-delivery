import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Box, BoxHeader, Details, SuccessContainer } from "./styles";
import deliveryImg from "../../assets/deliver.png";
import { useTheme } from "styled-components";

function Success() {
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
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </span>
                  <span>Farrapos - Porto Alegre, RS</span>
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
                  <strong>Cartão de crédito</strong>
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
