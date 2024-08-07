import { Cart, HeaderContainer, ItemsQuantity, Location } from "./styles";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [numOfItems, setNumOfItems] = useState(0);
  useEffect(() => {
    loadCoffeesInCart();
  }, []);

  async function loadCoffeesInCart() {
    const response = await fetch("http://localhost:3000/cart");
    const coffeesInCartFromJson = await response.json();

    setNumOfItems(coffeesInCartFromJson.length);
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <aside>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <Link to="/cart">
          <Cart>
            <ShoppingCartSimple size={22} weight="fill" />
          </Cart>
        </Link>

        <ItemsQuantity>{numOfItems}</ItemsQuantity>
      </aside>
    </HeaderContainer>
  );
}

export default Header;
