import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useTheCart } from "../../hooks/useTheCart";

export function Nav({ handleAddToCart }) {
  const { count } = useTheCart();

  return (
    <nav className="navStyle">
      <ul className="ulStyle">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/checkout">
            <FontAwesomeIcon icon={faShoppingCart} onClick={handleAddToCart} />
            {count > 0 && <span className="cartCountStyle">{count}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
