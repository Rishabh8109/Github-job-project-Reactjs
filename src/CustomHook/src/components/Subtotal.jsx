import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider/StateProvider';
import {getBasketTotal} from '../StateProvider/Reducer';

function Subtotal() {
    const [{backet}] = useStateValue();
   const BackeTtotal =  backet.reduce((acc ,item) => item.Price + acc , 0);

     return (
       <>
        <h3>Subtotal</h3>
         <CurrencyFormat 
         renderText = {(value) => (
             <>
               <p className="mb-2">Subtotal ({backet.length} item) : <strong>{`${value}`}</strong></p>
               <div className="subtotal_gift">
                   <input type="checkbox"/> This order container gift
               </div>
             </>
          )}
            decimalScale={2}
            value={BackeTtotal}
            displayType={"text"}
            thousandSeparator ={true}
            prefix={"$"}
         />  
         <button type="button" className="btn btn-primary btn-sm  mt-3 btn-block">Proccessed to checkout</button>
       </>
     )
}

export default Subtotal;