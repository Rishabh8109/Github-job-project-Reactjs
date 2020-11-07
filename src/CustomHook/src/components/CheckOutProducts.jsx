import React from "react";
import {useStateValue} from '../StateProvider/StateProvider';
import StarIcon from "@material-ui/icons/Star";
import '../product.css';


function CheckOutProducts({ id, title, Price, rating, image }) {
  const [{backet} , dispatch] = useStateValue();
 
  
     // Remove product from the basket
    const removeFromBasket = () => {
         dispatch({
             type : 'REMOVE TO BASKET',
             id : id
         })
    }

  return (
    <div className="CheckOutProducts p-3">
      <div className="row card card-light mx-3 shadow-sm border-light mx-3">
        <div className="col-sm-12 p-3">
          <div className="row">
            <div className="col-sm-4 p-3">
              <img src={image} alt="product-img" width="30%" className="ml-5 mb-4"  />
            </div>
            <div className="col-sm-8 p-3">
              <h4 className="mt-3">{title}</h4>
              <div className="product-price">
                <small>$</small>
                <strong>{Price}</strong>
              </div>
              <div className="product_rating">
                {Array(rating)
                  .fill()
                  .map((_) => (
                    <p>
                      <StarIcon />
                    </p>
                  ))}
              </div>
              <div className="RemoveCart">
                  <button type="button" className="btn btn-sm btn-warning" onClick={removeFromBasket}>Remove from Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProducts;
