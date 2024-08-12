import { Cart, HeaderContainer, ItemsQuantity, Location } from "./styles";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { useContext } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

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

        <ItemsQuantity>{cart.length}</ItemsQuantity>
      </aside>
    </HeaderContainer>
  );
}

export default Header;
