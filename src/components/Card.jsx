import {Link} from "react-router-dom";

export default function Card({ product, isInCart, toggleCartItem }) {
  return (
      <div className="card h-full bg-base-300 shadow-md">
        <figure className="px-10 pt-10">
          <img
              src={product.image}
              alt={product.title}
              className="rounded-xl h-56 object-contain"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <p className="line-clamp-3 text-sm text-gray-500">{product.description}</p>
          <div className="card-actions">
            <Link to={`/product/${product.id}`} className="btn btn-secondary">
              Show Product
            </Link>
            <button
                className={`btn ${isInCart ? "btn-error" : "btn-primary"}`}
                onClick={toggleCartItem}
            >
              {isInCart ? "Remove" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
  );
}