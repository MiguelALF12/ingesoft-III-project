import Table from 'react-bootstrap/Table';
import "./Uploads.css";

export default function Uploads() {
    return (
        <Table striped bordered hover responsive="md">
            <thead>
                <tr>
                    <th>Fecha de creación</th>
                    <th>Entidad</th>
                    <th>Tipo</th>
                    <th>Fecha inicio</th>
                    <th>Fecha fin</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    )
}
