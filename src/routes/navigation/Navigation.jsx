import { React, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/UserContext";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const { cartOpen, setCartOpen } = useContext(CartDropDownContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    setUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <p className="logo">EbuyLLC</p>
        </Link>
        {/* <input className="search-box" /> */}
        <div className="nav-links-container">
          <Link className="nav-link" to="/category">
            Category
          </Link>
          <Link className="nav-link" to="/shop">
            Shop All
          </Link>
          {user ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign In
            </Link>
          )}
          <div className="cart-container">
            <AiOutlineShoppingCart
              className="cart-icon"
              onClick={() => setCartOpen(!cartOpen)}
            />
          </div>
        </div>
        {cartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
