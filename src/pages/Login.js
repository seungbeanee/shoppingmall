import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useSelector } from "react-redux";

const Login = () => {
    const authenticate = useSelector((state) => state.auth.authenticate);
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = (e) => {
        e.preventDefault();
        dispatch(authenticateAction.login(id, password))
        navigate("/");
    }
    return (
        <div className="login-bar">
            <Form className="login-wd" onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>로그인</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
                </Form>
        </div>
    );
};

export default Login;