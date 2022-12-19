import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.jsx";
import { CartDropDownProvider } from "./contexts/CartDropDownContext.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoryProvider>
        <ProductProvider>
          <CartDropDownProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartDropDownProvider>
        </ProductProvider>
      </CategoryProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
