import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "@smastrom/react-rating/style.css";
import "./index.css";
import App from "./App.jsx";
import RootComp from "./components/RootComp.jsx";
import Home from "./components/pages/Home/Home.jsx";
import ProductDetail from "./components/pages/Home/products/ProductDetail.jsx";
import Products from "./components/pages/Home/products/Products.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";
import NotFound from "./components/pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComp />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Navigate to="products/computers" />,
          },
          {
            path: "products/:category",
            element: <Products />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
