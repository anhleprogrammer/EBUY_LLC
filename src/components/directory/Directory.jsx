import { useContext } from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./directory.styles.scss";
import { CategoryContext } from "../../contexts/CategoryContext";

function Directory() {
  const categoryContext = useContext(CategoryContext);

  return (
    <div className="categories-container">
      {categoryContext.category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Directory;
