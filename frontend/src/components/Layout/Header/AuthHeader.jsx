
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function AuthHeader() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Gestión de incapacidades logo</Navbar.Brand>
                <Navbar.Text>
                    Ingresado como: <strong>Admin</strong> Mark Otto
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
