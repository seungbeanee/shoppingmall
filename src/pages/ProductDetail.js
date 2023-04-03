import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
    let {id} = useParams();
    const product = useSelector((state) => state.product.selectedItem);
    const dispatch = useDispatch();
    const getProductDetail = async () => { 
        dispatch(productAction.getProductDetail(id)); 
    };
    useEffect(()=>{
        getProductDetail();
    },[])
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} alt=""/>
                </Col>
                <Col>
                    <div className="product-text">{product?.title}</div>
                    <div className="product-text">￦ {product?.price}</div>
                    <div className="product-choice">
                        {product?.choice === true? "Conscious choice" : "" }
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {product?.size.length > 0 && product.size.map((item) => (
                            <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                        ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className="product-btn">추가</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;