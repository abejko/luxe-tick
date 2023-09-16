import { HiOutlinePlus } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart, setItemAmount } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function trendingWatchesCard({ type, title, image, price, id }) {
  const product = { image, type, title, price, id };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
    dispatch(setItemAmount());
  };

  return (
    <div className="singleWatch grid">
      <div className="imgDiv">
        <img src={image} alt="Watch image" />

        <div className="addToCard">
          <button onClick={handleAddToCart}>
            <Link>
              <HiOutlinePlus size={37} className="icon addItem" />
            </Link>
          </button>

          <Link to={`/product/${id}`}>
            <FaRegEye size={37} className="icon showItem" />
          </Link>
        </div>
      </div>

      <h5 className="watchType">{type}</h5>
      <h5 className="watchTitle">{title}</h5>

      <div className="price_seller">
        <span className="price">${price}</span>
      </div>

      <div className=""></div>
    </div>
  );
}

export default trendingWatchesCard;
