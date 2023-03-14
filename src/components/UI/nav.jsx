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
      </ul>
    </nav>
  );
}