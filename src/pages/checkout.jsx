import Navigation from "../components/Navigation.jsx";
import {useLocation} from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  console.log(cartItems);

  return(
      <div className="min-h-screeen flex flex-col">
        <Navigation />
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <ul className="list">
              {cartItems.map((product) => (
                  <li key={product.id} className="list-row">
                    <div>
                      <img src={product.image} className="size-10 rounded-box" alt={product.title} />
                    </div>
                    <div className="list-col-grow">
<div>
  {product.title}
</div>
                      <div>
                        {product.price}
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
        )}
      </div>
  )
}