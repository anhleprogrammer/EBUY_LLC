import Carousel from "../../components/carousel/Carousel";
import Shop from "../../components/shop/Shop";
import "./home.styles.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
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
              <button>See all</button>
            </div>
          </div>
          <Shop category="smartphones" />
        </div>

        <div className="shop-container">
          <div className="img-container">
            <img className="img-left" src="./laptop.jpg" alt="" />,
            <div className="see-all-container">
              <button>See all</button>
            </div>
          </div>
          <Shop category="laptops" />
        </div>

        <div className="shop-container">
          <div className="img-container">
            <img className="img-left" src="./rolex.jpg" alt="" />,
            <div className="see-all-container">
              <button>See all</button>
            </div>
          </div>
          <Shop category="mens-watches" />
        </div>
      </div>
    </div>
  );
}

export default Home;
