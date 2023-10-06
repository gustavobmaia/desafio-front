import { HeaderStyled, ImageLogo } from "./Header.style";
import Logo from "../../assets/agrotis-developers.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <ImageLogo src={Logo} alt="agrotis" />
      </Link>
    </HeaderStyled>
  );
}
