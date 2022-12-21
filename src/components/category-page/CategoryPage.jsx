import { React, useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import Product from "../product/Product";

function CategoryPage() {
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  return (
    <div className="shop-container">
      {products &&
        products
          .filter((product) => product.category === name)
          .map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}

export default CategoryPage;
