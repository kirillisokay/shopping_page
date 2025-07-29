import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation.jsx";

export default function ProductProfile() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
<div className="min-h-screen flex flex-col">
  <Navigation />
  <main className="flex justify-center items-center h-screen container my-0 mx-auto p-4">
    <div className="card card-side bg-base-100 shadow-sm border-accent border">
      <figure>
        <img
            src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
          <Link to="/shop" className="btn btn-secondary">Back to Shopping</Link>
        </div>
      </div>
    </div>
  </main>
</div>
  );
}
