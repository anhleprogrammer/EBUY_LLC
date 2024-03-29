import { React, useContext, useState, useEffect } from "react";
import "./product-page.styles.scss";
import { ProductContext } from "../../contexts/ProductContext";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";
import Product from "../product/Product";
import { useParams } from "react-router-dom";
import { Star } from "../star/Star";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
import Button from "../button/Button";
function ProductPage() {
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartDropDownContext);
  const product =
    products && products.find((product) => product.title === name);
  const relatedProduct =
    products &&
    products.filter((p) => p.category === product.category && p.title !== name);
  console.log(cartItems);

  let thumbnailElement;
  if (product) {
    thumbnailElement = <img src={product.thumbnail} alt={product.title} />;
  } else {
    thumbnailElement = <p>Not Available</p>;
  }

  const [localThumbnail, setThumbnail] = useState(thumbnailElement);
  const hoverHandler = (e) => {
    setThumbnail(<img src={e.target.src} alt={product.title} />);
  };
  useEffect(() => {
    setThumbnail(thumbnailElement);
  }, [product]);
  const handleAdd = () => {
    setCartItems(product);
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
            <div className="thumbnail">{localThumbnail}</div>
            <div className="container-product-info">
              <div className="title">{product.title}</div>
              <div>{product.category.toUpperCase()}</div>
              <div>
                <Star rating={product.rating} reviews={product.reviews} />
              </div>
              <div>${product.price}</div>
              <div>{product.description}</div>
              <div>
                <Button buttonType="addToCart" onClick={() => handleAdd()}>
                  ADD TO CART
                </Button>
              </div>
            </div>
            <div className="container-right-most">
              <div className="container-guarantee">
                <p>Shop with confidence</p>
                <div className="inner-container">
                  <AiFillLike />
                  <div>
                    <p>Top Rated Plus</p>
                    <p>
                      Reliable seller, fast shipping, and effortless returns.
                    </p>
                    <a
                      target="_blank"
                      href="https://portfolio-anhleprogrammer.vercel.app/projects"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="inner-container second">
                  <SiAdguard />
                  <div>
                    <p>eBuy Money Back Guarantee</p>
                    <p>Get the item you ordered or get your money back.</p>
                    <a
                      target="_blank"
                      href="https://portfolio-anhleprogrammer.vercel.app/projects"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-related">
            <p>Related Product</p>
            <div className="related-product-container">
              {relatedProduct &&
                relatedProduct.map((related) => <Product product={related} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
