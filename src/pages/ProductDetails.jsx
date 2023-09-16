import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart, setItemAmount } from "../store/slices/cartSlice";
import { trendingWatchesData } from "../utils/Constants";
import { useDispatch } from "react-redux";

function ProductDetails() {
  // Get the product id from URL parameters
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Find the single product based on id
  const product = trendingWatchesData.find((item) => item.id === parseInt(id));

  // Check if the product exists
  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product })); // Dispatch addToCart action
    dispatch(setItemAmount()); // Dispatch setItemAmount action
  };

  const { image, title, price, description } = product;

  // const { image, title, price, description } = product;
  return (
    <section className="productDetails">
      <div className="secContainer container">
        {/* image and text wrapper */}
        <div className="productContainer flex">
          {/* image */}
          <div className="productImage flex">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="textContainer">
            <h1 className="title ">{title}</h1>
            <div className="price">$ {price}</div>
            <p className="description">{description}</p>
            <button onClick={handleAddToCart} className="addToCartbtn ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
