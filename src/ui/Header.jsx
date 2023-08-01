import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fst React Pizza Co.</Link>
      <SearchOrder />
      <p>Swati</p>
    </header>
  );
}

export default Header;
