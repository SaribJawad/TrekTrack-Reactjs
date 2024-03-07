import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link style={{ textDecoration: "none", fontSize: "2rem" }} to="/">
        <h1 style={{ color: "white" }}>LOGO</h1>
      </Link>
      <AppNav />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
