import {Link} from "react-router-dom";

export default function DrawerCart({ cartItems, removeFromCart }) {
  return (
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className=" bg-base-200 text-base-content min-h-full w-1/2 p-4 list">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Your Cart</li>
          {cartItems.length === 0 ? (
              <li className="list-row">No items in cart</li>
          ) : (
              cartItems.map((product, idx) => (

            <li key={idx} className="list-row">
              <div><img alt={product.title} className="size-10 rounded-box" src={product.image}/></div>
              <div>
                <div>{product.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{product.category}</div>
              </div>
              <p className="list-col-wrap text-xs">{product.description}</p>
              <button className="btn btn-square btn-ghost text-xl" onClick={() => removeFromCart(product.id)}>
                &#10799;
              </button>
        </li>
              ))
          )}
          {cartItems.length > 0 && (
              <Link
                  to="/checkout"
                  state={{ cartItems }}
                  className="mt-6 btn btn-success"
              >
                Checkout
              </Link>
          )}
        </ul>
      </div>
  );
}
