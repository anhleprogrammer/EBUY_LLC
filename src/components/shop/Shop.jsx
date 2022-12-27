import { React, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../product/Product";
import "./shop.styles.scss";
import { AiFillFilter } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-container">
      <div className="shop-container-header">
        <p>{products.length} products</p>
        <div className="filter-sort-container">
          <div className="filter-container">
            <AiFillFilter />
            <p>Filter</p>
          </div>
          <div className="sort-container">
            <BiSortAlt2 />
            <p>Sort</p>
          </div>
        </div>
      </div>
      <div className="shop-container-body">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Shop;
