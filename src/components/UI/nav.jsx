import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function Nav({ handleAddToCart }) {
  return (
    <nav className="navStyle">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactPage">Contact</Link>
        </li>
        <li>
          <Link to="/cartPage">
            <FontAwesomeIcon icon={faShoppingCart} onClick={handleAddToCart} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
