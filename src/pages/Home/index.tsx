import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import { CoffeeList, Heading, Hero, HomeContainer, Items } from "./styles";
import Card, { CoffeeType } from "../../components/Card";
import coffee from "../../assets/Coffee.png";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

function Home() {
  const theme = useTheme();

  const [coffees, setCoffees] = useState<CoffeeType[]>([]);

  useEffect(() => {
    loadCoffees();
  }, []);

  async function loadCoffees() {
    const response = await fetch("http://localhost:3000/coffees");
    const coffees = await response.json();

    setCoffees(coffees);
  }

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
              <ShoppingCartSimple
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

        <div>
          {coffees.map((coffee: CoffeeType) => {
            return <Card coffee={coffee} key={coffee.id} />;
          })}
        </div>
      </CoffeeList>
    </HomeContainer>
  );
}

export default Home;
