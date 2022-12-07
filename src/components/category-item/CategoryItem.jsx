import "./category-item.styles.scss";

function CategoryItem({ category }) {
  return (
    <div className="category-container">
      <div className="image-container">
        {" "}
        <img className="image" src={`${category.name}.png`} />
      </div>
      <div className="category-body-container">
        <h2>{category.name.replace("-", " ")}</h2>
      </div>
    </div>
  );
}

export default CategoryItem;
