import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { loadReturnedAplicantDocs } from "../../../utils/files";

export default function IncapacitiesTable({ docs, incapacities }) {
    useEffect(() => {
        loadReturnedAplicantDocs(docs);
    }, [docs]);
    return (
        <Table striped bordered hover responsive="md">
            <thead>
                <tr>
                    <th>Fecha Inicio</th>
                    <th>Fecha Fin</th>
                    <th>Tipo</th>
                    <th>Documento</th>
                </tr>
            </thead>
            <tbody>
                {incapacities.length > 0 ? incapacities.map((employee) => {
                    return (
                        <tr key={"employee-" + employee.id.toString()} id={"employeeHandler-" + employee.id.toString()} >
                            <td>{employee.fecha_inicio}</td>
                            <td>{employee.fecha_fin}</td>
                            <td>{employee.tipo_incapacidad}</td>
                            {/* append the links of the docs */}
                            <td id={`${employee.documento}ViewerCell`} className="text-center">
                            </td>
                        </tr>
                    )
                }) : <tr>No hay registros disponibles</tr>}
            </tbody>
        </Table>
    )
}

IncapacitiesTable.propTypes = {
    docs: PropTypes.any.isRequired,
    incapacities: PropTypes.array.isRequired,
}