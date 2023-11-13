// TODO: De ser posible, arreglar el problema de que el footer no se queda abajo cuando el contenido es poco, hay un solapamiento de divs
import { Outlet, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import "./Employee.css"
import AuthHeader from "../../../components/Layout/Header/AuthHeader"
import Footer from '../../../components/Layout/Footer/Footer'

export default function Employee() {

    return (
        <div id="employee-container">
            <AuthHeader />
            <Row id="employee-subcontainer" className="justify-content-center py-4">
                <Col xs={12} md={7} lg={7} xl={7} xxl={7} className="border border-opacity-10 rounded-4">
                    <div id="tabs" className='d-flex align-items-center my-3'>
                        <div className='px-3 text-center rounded-top'><Link className='text-decoration-none ' to="incapacities">Subir <br />documentos</Link></div>
                        <div className='px-3 text-center rounded-top'><Link className='text-decoration-none' to="uploads">Subidas</Link></div>
                    </div>
                    <Outlet />
                </Col>
            </Row>
            <Footer />
        </div >
    )
}

