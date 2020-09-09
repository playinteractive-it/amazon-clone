import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';


function Subtotal() {
  const [{ basket }] = useStateValue();
  let totalAmount = [];

  const getBasketTotal = (items) => {
    items.map((item, i) => {
      return totalAmount.push(item.price);
    });
    return totalAmount.reduce((a, b) => a + b, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{`${value}`}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}


export default Subtotal;
