import { CoffeeList, Heading, Hero, HomeContainer, Items } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffee from "../../assets/Coffee.png";
import { useTheme } from "styled-components";
import Card from "../../components/Card";

function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <Hero>
        <Heading>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Items>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme["base-background"]}
                style={{ backgroundColor: theme["yellow-dark"] }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme["base-background"]}
                style={{ backgroundColor: theme["base-text"] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme["base-background"]}
                style={{ backgroundColor: theme["yellow"] }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme["base-background"]}
                style={{ backgroundColor: theme["purple"] }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </Heading>
        <img src={coffee} alt="" />
      </Hero>

      <CoffeeList>
        <h1>Nossos Cafés</h1>
        <Card />
      </CoffeeList>
    </HomeContainer>
  );
}

export default Home;
