import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get('q');
        let data = await fetch(`http://localhost:5000/products${searchQuery?'?q='+searchQuery:''}`)
                            .then((res) => res.json());
        setProductList(data);
    }
    useEffect(()=>{
        getProducts()
    },[query])
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu)=>(
                        <Col lg={3} key={menu.id}>
                            <ProductCard item={menu}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;