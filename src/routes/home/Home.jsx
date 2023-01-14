import Carousel from "../../components/carousel/Carousel";
import Shop from "../../components/shop/Shop";
import "./home.styles.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="shop-section-container">
        <div className="shop-container">
          <div className="img-container">
            <img className="img-left" src="./phone.jpg" alt="" />,
            <div className="see-all-container">
              <Link to="/category/smartphones">
                <button>See all</button>
              </Link>
            </div>
          </div>
          <Shop category="smartphones" />
        </div>

        <div className="shop-container">
          <div className="img-container">
            <img className="img-left" src="./laptop.jpg" alt="" />,
            <div className="see-all-container">
              <Link to="/category/laptops">
                <button>See all</button>
              </Link>
            </div>
          </div>
          <Shop category="laptops" />
        </div>

        <div className="shop-container">
          <div className="img-container">
            <img className="img-left" src="./rolex.jpg" alt="" />,
            <div className="see-all-container">
              <Link to="/category/mens-watches">
                <button>See all</button>
              </Link>{" "}
            </div>
          </div>
          <Shop category="mens-watches" />
        </div>
      </div>
    </div>
  );
}

export default Home;
