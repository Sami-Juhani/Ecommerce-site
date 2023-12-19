import { Link } from "react-router-dom";

function MostPopularItem(props) {
  const { id, img, description, category, subcategory} = props;

  return (
    <div className="category" key={id} id={`popular-${id}`}>
      <Link 
      to={`/most-popular/${category}/${subcategory}`}
      state = {props}>
      <div className="image-container">
        <img className="image" src={img} alt='Some description' />
      </div>
      <div className="product-info">
         {description}
      </div>
     </Link>
    </div>
  );
}

export default MostPopularItem;
