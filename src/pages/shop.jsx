import Navigation from "../components/Navigation.jsx";
import { useState, useEffect } from 'react'
import Card from "../components/Card.jsx";
import DrawerCart from "../components/DrawerCart.jsx";
import {getProductsFromApi} from "../api/fakeStore.js";

export default function Shop(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    getProductsFromApi()
        .then((data) =>
        {
          setLoading(false);
          setProducts(data)
        })
        .catch((err) => console.log(err));
  }, [])

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  if (loading) return <span aria-label="Loading products" className="loading loading-dots loading-xl"></span>;
  return (
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <Navigation inCartItems={cartItems} />
          <main className="p-8 grow-1 container mx-auto my-0 grid gap-6 grid-cols-3 grid-flow-row auto-rows-min items-stretch">
            {products.map((product) => (
                <Card
                    key={product.id}
                    product={product}
                    isInCart={cartItems.some(item => item.id === product.id)}
                    toggleCartItem={() => {
                      const isInCart = cartItems.some(item => item.id === product.id);
                      if (isInCart) {
                        removeFromCart(product.id);
                      } else {
                        addToCart(product);
                      }
                    }}
                />
            ))}
          </main>
        </div>
        <DrawerCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
  )
}