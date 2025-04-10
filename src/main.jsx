import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import PageLayout from "./pages/Layouts/PageLayout/PageLayout.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "products",
        children: [
          {
            path: "add",
            element: <AddProduct editMode={false} />,
          },
          {
            path: "edit/:id",
            element: <AddProduct editMode={true} />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
