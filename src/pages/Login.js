import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate("/");
    }
    return (
        <div className="login-bar">
            <Form className="login-wd" onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>로그인</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
                </Form>
        </div>
    );
};

export default Login;