import navbarStyles from "../styles/modules/Navbar.module.css";
import Link from "next/link";
function Navbar() {
  return (
    <div className={navbarStyles["navbar-main"]}>
      <Link href="/">
        <a className={navbarStyles["p"]}>Learn.</a>
      </Link>
      <div className={navbarStyles["navbar-links"]}>
        <Link href="/catalog">
          <a className={navbarStyles["navbar-link"]}>Catalog</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
