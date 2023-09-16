import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

function Sidebar({ removeSidebar, sidebarOpen }) {
  //////////////////////////////////////////////////////////
  const selectCartData = (state) => state.cart.data;

  // Create a memoized selector using createSelector
  const selectTotal = createSelector([selectCartData], (data) => {
    // Compute the total based on the data
    return data.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
  });

  const total = useSelector(selectTotal);
  console.log("watches total:", total);

  ////////////////////////////////////////////////////

  const { itemAmount, data } = useSelector((state) => state.cart);

  console.log("updated item amount:", itemAmount);
  console.log("watches data:", data);

  return (
    <div className={`sidebar ${sidebarOpen && "showSidebar"}`}>
      <div className="heading flex">
        <h3 className="cartTitle ">Shopping cart ({itemAmount})</h3>

        <TfiClose className="icon closeIcon" onClick={removeSidebar} />
      </div>

      <div className="cartItems">
        <ul className="itemsList">
          {/* Single cart item */}
          {data.map((item, index) => (
            <CartItem item={item} key={index} removeSidebar={removeSidebar} />
          ))}
        </ul>
        <p className="total">
          <strong>Subtotal: </strong>
          <span className="priceAmpount">
            <span className="currencySymbol"> $</span>
            {parseFloat(total).toFixed(2)}
          </span>
        </p>
        <div className="checkout grid">
          <Link to={"/"} onClick={removeSidebar} className="viewCartBtn btn ">
            View Cart
          </Link>
          {/* divider */}

          <Link to={"/"} onClick={removeSidebar} className="checkoutBtn btn ">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
