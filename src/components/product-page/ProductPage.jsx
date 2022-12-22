import { React, useContext, useState } from "react";
import "./product-page.styles.scss";
import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { Star } from "../star/Star";
import { AiFillStar } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
function ProductPage() {
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((product) => product.title === name);

  const [thumbnail, setThumbnail] = useState(
    <img src={product.thumbnail} alt={product.title} />
  );
  console.log(product);
  const hoverHandler = (e) => {
    setThumbnail(<img src={e.target.src} alt={product.title} />);
  };
  return (
    <>
      {product && (
        <div className="container">
          <div className="container-product">
            <div className="small-img">
              {product.images.map((image) => (
                <img
                  src={image}
                  alt={product.title}
                  onMouseEnter={hoverHandler}
                />
              ))}
            </div>
            <div className="thumbnail">{thumbnail}</div>
            <div className="container-product-info">
              <div className="title">{product.title}</div>
              <div>category</div>
              <span>star here</span>
              <span>rating here</span>
              <p>price</p>
              <div>{product.description}</div>
              <button>ADD TO CART</button>
            </div>
            <div>
              <div className="container-guarantee">
                <p>Shop with confidence</p>
                <div>
                  <SiAdguard />
                  <div>
                    <p>eBuy Money Back Guarantee</p>
                    <p>Get the item you ordered or get your money back.</p>
                    <a href="google.com">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="container-seller">
                <p>Seller Information</p>
                <a className="seller-name">
                  anhleprogrammer (9000 <AiFillStar className="star" />)
                </a>
                <p>100% Positive feedback</p>
                <p>Save this seller</p>
                <p>Contact seller</p>
                <p>See other items</p>
              </div>
            </div>
          </div>
          <div className="container-related">related products</div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
