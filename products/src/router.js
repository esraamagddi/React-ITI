import { Outlet, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
 
import ErrorPage from "./pages/ErrorPage/ErrorPage";
 

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/:productid",
        element: <ProductDetails />,
      },
      
    ],
  },
  
]);

export default router;
