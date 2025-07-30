import Navigation from "../components/Navigation.jsx";
import {Link} from "react-router-dom";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex flex-col items-center justify-center p-8 text-center grow-1 container mx-auto my-0">
          <p className="text-lg mb-6">Your one-stop shop for amazing products.</p>
          <Link to="/shop" className="bg-black text-white px-6 py-2 rounded">
            Start Shopping
          </Link>
        </main>
      </div>
  )
}