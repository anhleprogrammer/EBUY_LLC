import CategoryItem from "../category-item/CategoryItem";
import "./directory.styles.scss";

function Directory({ categories }) {
  console.log(categories);
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Directory;
