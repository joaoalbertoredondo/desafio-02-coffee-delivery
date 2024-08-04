import { Cart, HeaderContainer, Location } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
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
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
      </aside>
    </HeaderContainer>
  );
}

export default Header;