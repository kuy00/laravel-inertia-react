import { Link, usePage } from "@inertiajs/react";

const Header = () => {
  const { component } = usePage();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link
            className={
              component === "Home" ? "nav-item nav-link active" : "nav-item nav-link"
            }
            href="/"
          >
            Home
          </Link>
          <Link
            className={
              component === "Login" ? "nav-item nav-link active" : "nav-item nav-link"
            }
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
