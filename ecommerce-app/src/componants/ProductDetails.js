import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';

import Product from "./Product";

function ProductDetails(){
    const apiUrl = "https://dummyjson.com/products";
    const params = useParams();
    const [product, setProduct] = useState(''); 

    useEffect(() => {
        fetch(`${apiUrl}/${params.productId}`)
          .then(res => res.json())
          .then(data => {
            setProduct(data); 
          });
    }, [params.productId]); 



    return(
        <Product product={product} showButton={false}/>
    );
}

export default ProductDetails;
