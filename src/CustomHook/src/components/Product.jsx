import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../StateProvider/StateProvider';

import '../product.css'

function Product({id , title , Price , rating , image}) {
   const [{} ,dispatch] = useStateValue();

  const AddToCart = () => {
      dispatch({
          type : 'ADD TO CART',
          item : {
              id,
              title,
              Price,
              rating, 
              image
          }
      })
  }
    return (
        <Container>
                <Box >
                    <div className="product_card">

                        <div className="product_image">
                            <img src={image} alt="product_image" className="productImage "/>
                         </div>
                       <h6 className="mt-3">{title}</h6>
                        <div className="product-price">
                            <small>$</small> 
                            <strong>{Price}</strong>
                        </div>
                        <div className="product_rating">
                            { Array(rating).fill().map((_) => (
                            <p><StarIcon /></p>
                            ))}
                        </div>
                        <div className="add-card">
                             <button className="btn btn-warning btn-sm mb-2" onClick={AddToCart}>Add to cart</button>
                        </div>
                    </div>
                </Box>
        </Container>
    )
}

export default Product;               
