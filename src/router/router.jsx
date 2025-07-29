import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home.jsx";
import Shop from "../pages/shop.jsx";
import ProductProfile from "../pages/ProductProfile.jsx";
import CheckoutPage from "../pages/checkout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/product/:productId',
    element: <ProductProfile />
  },
  {
    path: '/checkout',
    element: <CheckoutPage/>
  }
])


export default router;