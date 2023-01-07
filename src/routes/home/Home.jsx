import Carousel from "../../components/carousel/Carousel";
import Shop from "../../components/shop/Shop";
import "./home.styles.scss";
function Home() {
  return (
    <div className="home-container">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="shop-container">
        <Shop category="smartphones" />
        <Shop category="laptops" />
        <Shop category="tops" />
      </div>
    </div>
  );
}

export default Home;
