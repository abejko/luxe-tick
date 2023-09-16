import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  increaseAmount,
  decreaseAmount,
  removeFromCart,
} from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item, removeSidebar }) {
  const { title, image, price, id, amount } = item;

  const dispatch = useDispatch();

  const handleIncreaseAmount = () => {
    dispatch(increaseAmount({ id }));
  };
  const handleDecreaseAmount = () => {
    dispatch(decreaseAmount({ id }));
  };
  const handleItemRemove = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <li className="itemLi flex">
      <Link href="#">
        <img className="imgDiv" src={image} alt="watch name" />
      </Link>

      {/* Item First Line  //////////// */}

      <div className="itemTextContent">
        {/* title and remove icon */}
        <div className="itemTitle">
          {/* title */}
          <Link
            to={`/product/${id}`}
            className="title "
            onClick={removeSidebar}
          >
            {title}
          </Link>
          {/* remove icon */}
          <div className="closeIcon" onClick={handleItemRemove}>
            <IoMdClose className="icon" />
          </div>
        </div>

        {/* Item Second Line  //////////// */}

        <div className="itemPrice">
          {/* quantity */}
          <div className="quantity flex">
            <div className="decreaseIcon flex " onClick={handleDecreaseAmount}>
              <AiOutlineMinus />
            </div>
            <div className="amount flex">{amount}</div>
            <div className="increaseIcon flex" onClick={handleIncreaseAmount}>
              <AiOutlinePlus />
            </div>
          </div>
          {/* item price */}
          <div className="finalItemPrice flex">$ {price}</div>
          {/* final price */}
          <div className="finalPrice flex">
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
