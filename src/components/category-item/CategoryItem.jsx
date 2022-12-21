import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";

const transformText = (text) => {
  const arrStr = text.split(" ");
  text = "";
  for (let str of arrStr) {
    text += str[0].toUpperCase() + str.slice(1) + " ";
  }
  return text;
};
function CategoryItem({ category }) {
  const navigate = useNavigate();
  return (
    <div
      className="category-container"
      onClick={() => navigate(`/category/${category}`)}
    >
      <div className="image-container">
        <img className="image" src={`./${category}.png`} />
      </div>
      <div className="category-body-container">
        <h2>{transformText(category.replace("-", " "))}</h2>
      </div>
    </div>
  );
}

export default CategoryItem;
