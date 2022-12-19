import "./category-item.styles.scss";

function CategoryItem({ category }) {
  return (
    <div className="category-container">
      <div className="image-container">
        <img className="image" src={`./${category}.png`} />
      </div>
      <div className="category-body-container">
        <h2>{category.replace("-", " ")}</h2>
      </div>
    </div>
  );
}

export default CategoryItem;
