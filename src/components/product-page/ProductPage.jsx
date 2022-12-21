import { React, useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { Star } from "../star/Star";

function ProductPage() {
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.filter((prod) => (prod.title = name))[0];
  //   const product = products.find((product) => (product.title = name));
  //   console.log(product, name);
  return (
    <div>
      <div>
        <img src={product.images[0]} alt={product.title} />
        {/* <img src={product.images[1]} alt={product.title} />
        <img src={product.images[2]} alt={product.title} />
        <img src={product.images[3]} alt={product.title} />
        <img src={product.images[4]} alt={product.title} /> */}
      </div>
      <div>{/* <img src={product.images[0]} alt={product.title} /> */}</div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ProductPage;
