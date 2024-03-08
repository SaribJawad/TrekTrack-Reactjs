import { Link, Outlet } from "react-router-dom";
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
    </div>
  );
}

export default Sidebar;
