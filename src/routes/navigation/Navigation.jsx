import { React, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/UserContext";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import { HiOutlineShoppingCart } from "react-icons/hi";
function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const { cartOpen, setCartOpen, cartItems } = useContext(CartDropDownContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    setUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <p className="logo">ECommerce</p>
        </Link>
        {/* <input className="search-box" /> */}
        <div className="nav-links-container">
          <Link className="nav-link" to="/category">
            Category
          </Link>

          {user ? (
            <Link className="nav-link" onClick={signOutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign In
            </Link>
          )}
          <div className="cart-container">
            <HiOutlineShoppingCart
              className="cart-icon"
              onClick={() => setCartOpen(!cartOpen)}
            />
            <p>{cartItems.length}</p>
          </div>
        </div>
        {cartOpen && <CartDropDown />}
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}

export default Navigation;
