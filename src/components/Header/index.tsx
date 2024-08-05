import { Cart, HeaderContainer, ItemsQuantity, Location } from "./styles";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
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
        
        <ItemsQuantity>3</ItemsQuantity>
      </aside>
    </HeaderContainer>
  );
}

export default Header;
