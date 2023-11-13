import { useNavigate } from "react-router";
import ImgCarrousel from "./ImgCarrousel"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./Login.css"

export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // TODO: validate user credentials
        let role = "employee"; // or "employee" or "admin"
        e.preventDefault();
        navigate(`/${role}/dashboard`);
    }
    return (
        <div id="login-container" className="d-flex align-items-center justify-content-center">
            <div id="form-area" className="d-flex justify-content-between border border-1">
                {/* carrousel */}
                <div><ImgCarrousel /></div>
                <div>
                    {/* login form */}
                    <Form className="p-3" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Well never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
