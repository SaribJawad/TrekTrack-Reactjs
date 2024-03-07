import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
