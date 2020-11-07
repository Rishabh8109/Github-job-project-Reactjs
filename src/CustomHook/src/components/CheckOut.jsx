import React from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import '../CheckOut.css';
import CheckOutProducts from '../components/CheckOutProducts';
import Subtotal from './Subtotal';
function CheckOut() {
    const [{backet}] = useStateValue();
    return (
        <div className="chekout">
            <div className="headerImage row">
               
                    <img src="https://www.spanawaylakemonstersbbc.com/uploads/1/2/5/6/12563479/amazonsmile-cybermonday-notice_2.jpg" alt="header_img" className="header_img ml-5 my-3" width="50%" />
                
                {backet.length > 0 && ( 
               
                       <div className="subtotal_page card card-light rounded ">
                                <div className="card-body ">
                                <Subtotal />
                                </div>
                         </div>         
                    
               )}
            </div>
            <div className="AddedProducts">
                {backet.length === 0 ? (
                  <div className="EmptyCart">
                      <h2>Your shopping cart is Empty</h2>
                      <p>You have no item , to buy one or "Add to Backet" to next </p>
                  </div>
                 ):(
                    <div className="FillCart">
                         <h2>Your shopping cart</h2>
                         {backet.map(item => (
                             <CheckOutProducts 
                                id = {item.id}
                                title = {item.title}
                                Price = {item.Price}
                                rating = {item.rating}
                               image = {item.image}
                             />
                         ))}
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default CheckOut;
