 import { Link } from "react-router-dom";
 
 export function Nav() {
  return (
    <nav className="navStyle">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactPage">Contact Page</Link>
        </li>
        <li>
          <Link to="/checkoutPage">Checkout Page</Link>
        </li>
        <li>
          <Link to="/checkoutSuccessPage">Checkout Success Page</Link>
        </li>
      </ul>
    </nav>
  );
}