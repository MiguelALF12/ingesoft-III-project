import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import PropTypes from 'prop-types'

import "./Filter.css"
import { filterRecords } from "../../utils/componentsFunc";

export default function Filter({ employees, employeesFromQuery }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (searchQuery) => {
        const employeesFromSearch = filterRecords(employees, searchQuery);
        employeesFromQuery(employeesFromSearch);

    }

    return (
        <InputGroup>
            <span className="py-3"> Ingrese cualquier palabra y luego seleccione una categoría de filtrado:</span>
            <Form className="d-flex w-100 justify-content-around pb-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="d-flex w-75">
                    <Form.Control className="w-75" placeholder="Caracteristica de filtrado" defaultValue="" {...register("pattern")} />
                    <Form.Select className="w-25" {...register("parameter")}>
                        <option>Seleccione</option>
                        <option value="nombreEmpleado">Nombre</option>
                        <option value="apellidoEmpleado">Apellido</option>
                        <option value="cedula">Cedula</option>
                        <option value="departamentoEmpleado">Cargo</option>
                    </Form.Select>
                </Form.Group>
                <div className="justify-content-center"><Button type="submit"> Buscar </Button></div>
            </Form>
        </InputGroup>

    )
}




Filter.propTypes = {
    employees: PropTypes.array.isRequired,
    employeesFromQuery: PropTypes.func.isRequired
}