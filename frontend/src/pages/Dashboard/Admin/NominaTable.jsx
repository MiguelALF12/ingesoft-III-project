import { AiFillEye } from "react-icons/ai";
import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";


export default function NominaTable({ employees, action }) {

    return (
        <Table striped bordered hover responsive="md">
            <thead>
                <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {employees.length > 0 ? employees.map((employee) => {
                    return (
                        /**?
                        "id": 26,
                        "nombre": "Saul",
                        "apellido": "Sheasby",
                        "telefono": "806-778-5290",
                        "departamento": "Services",
                        "cedula": "33-0267639"
                         */
                        //onClick={event => props.clickedAplicant(event.currentTarget.getAttribute("id"))}
                        <tr key={"employee-" + employee.id.toString()} id={"employeeHandler-" + employee.id.toString()} >
                            <td>{employee.cedula}</td>
                            <td>{employee.nombre}</td>
                            <td>{employee.apellido}</td>
                            <td>{employee.telefono}</td>
                            <td>{employee.departamento}</td>
                            <td className="text-center">
                                {/* <span role="button" className="d-inline-block bg-primary mx-1 rounded pointer" onClick={() => {
                                    action(["edit", employee.id])
                                }}>
                                    <AiFillEye size="1.7em" color="white" />
                                </span> */}
                                <span role="button" className="mx-1 rounded pointer" onClick={() => {
                                    action(["edit", employee.id])
                                }}>
                                    <AiFillEye size="1.7em" color="black" />
                                </span>
                            </td>
                        </tr>
                    )
                }) : <tr>No hay registros disponibles</tr>}
            </tbody>
        </Table>)
}
NominaTable.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.object).isRequired,
    action: PropTypes.func.isRequired
}