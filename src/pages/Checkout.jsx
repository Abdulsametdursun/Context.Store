import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  // total price in cart
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  // total items in cart
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  return (
    <div className="container">
      <div className="d-flex flex-column gap-5">
        {basket.length === 0 && (
          <p className="text-center my-5 ">
            <span className="mx-3">Add an item to the cart please!</span>
            <Link to="/">Items</Link>
          </p>
        )}
        {basket.map((product) => (
          <div className="d-flex justify-content-between gap-3 align-items-center">
            <div
              className="bg-white rounded"
              style={{ width: "100px", height: "100px" }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                className="rounded object-fit-contain shadow"
                src={product.image}
              />
            </div>
            <h4 className="text-truncate">{product.title}</h4>

            <h3 className="text-success">${product.price}</h3>
            <p className="text-sm text-nowrap">Quantity: {product.amount}</p>
            <div className="d-flex gap-3">
              <button
                onClick={() => removeFromBasket(product.id)}
                className="btn btn-danger"
              >
                -
              </button>
              <button
                onClick={() => addToBasket(product)}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border p-5 rounded my-5 fs-4">
        <p>
          Items in Cart: <span className="text-warning">{totalAmount}</span>
        </p>
        <p>
          Total Price: $
          <span className="text-success">{totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Checkout;
