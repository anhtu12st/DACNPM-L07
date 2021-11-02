import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo-search">
        <Link className="logo" to="/">
          BK LOGO
        </Link>
        <div className="search">
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="right-action">
        <div className="login-signup">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/signup" className="signup">
            Signup
          </Link>
        </div>
        <div className="profile">PO</div>
      </div>
    </header>
  );
};

export default Header;
