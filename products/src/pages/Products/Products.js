import React, { useEffect } from 'react';
import CardComponent from '../../reusableComponents/Card';
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../slices/productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <div className="my-cards-container">
                <h2>My Products</h2>
                <div className="row">
                    {Array.isArray(products) && products.map((card, index) => (
                        <div key={card.id} className="col-lg-4">
                            {console.log(card)}
                            <CardComponent title={card.title} text={card.category} id={card.id} img={card.images[0]}></CardComponent>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Products;
