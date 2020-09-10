import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating }) {
  const [ ,dispatch] = useStateValue(); 

  // console.log('This is the basket ->', basket);

  const addToBasket = () => {
    // dispatch the item into the layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="product__ratingIcon" />
          ))}
        </div>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img
        src={image}
        alt="Product"  
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}


export default Product;
