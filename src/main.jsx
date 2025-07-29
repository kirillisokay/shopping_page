import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import './index.css'
import router from "./router/router.jsx";

const route = router

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={route}/>
  // </StrictMode>,
)
