import { useEffect, useState } from "react";
import Product from "./Product";
import Button from "./Button";

function ProductList() {
  const apiUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  };

  const getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      });
  };

  const getProductInCategory = (catName) => {
    fetch(`${apiUrl}/category/${catName}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      });
  };
  
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div>
      {categories && categories.length > 0 && (
        <div>
          {categories.map(category => (
            <Button key={category} name={category} color={"black"} onClick={() => getProductInCategory(category)}>
              {category}
            </Button>
          ))}
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <Product key={product.id} product={product} showButton={true} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
