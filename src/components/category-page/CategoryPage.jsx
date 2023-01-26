import { React, useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import Product from "../product/Product";
import "./category-page.styles.scss";
function CategoryPage() {
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  return (
    <div className="category-page-container">
      <div>
        {products &&
          products
            .filter((product) => product.category === name)
            .map((product) => <Product product={product} />)}
      </div>
    </div>
  );
}

export default CategoryPage;
