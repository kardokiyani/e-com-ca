import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function Nav({ handleAddToCart, cartCount }) {
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
            <span className="cartCountStyle">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

