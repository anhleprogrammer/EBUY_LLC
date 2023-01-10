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
        <div>
          <div className="shop-header">
            <p>Phone</p>
            <p>See all</p>
          </div>

          <Shop category="smartphones" />
        </div>
        <div>
          <div className="shop-header">
            <p>Laptop</p>
            <p>See all</p>
          </div>
          <Shop category="laptops" />
        </div>

        <div>
          <div className="shop-header">
            <p>Men Watches</p>
            <p>See all</p>
          </div>
          <Shop category="mens-watches" />
        </div>
      </div>
    </div>
  );
}

export default Home;
