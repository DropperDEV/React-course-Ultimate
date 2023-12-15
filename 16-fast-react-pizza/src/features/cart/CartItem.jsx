import { formatCurrency } from "../../utils/helpers";
import DeleteItem from './DeleteItem';

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { pizzaId,name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
