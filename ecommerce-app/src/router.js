import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import ProductList from "./componants/ProductList";
import ProductDetails from "./componants/ProductDetails"; 
import Error from "./componants/Error";
import Form from "./pages/Form";
export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Form />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
