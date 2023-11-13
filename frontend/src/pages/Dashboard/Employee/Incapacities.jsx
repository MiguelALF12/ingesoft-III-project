// TODO: Si se puede, mejorar el manejo de errores por parte de los endpoints usados
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect } from 'react'
import { MdCleaningServices } from "react-icons/md"
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from 'react-calendar'

import "./Incapacities.css";
import 'react-calendar/dist/Calendar.css';
import { createIncapacity } from "../../../api/Incapacidades";
import { createDocument } from "../../../api/Documentos";
import { renameFile } from '../../../utils/files';

export default function Incapacities() {
    const { register, handleSubmit } = useForm();
    const [dateValue, setDateValue] = useState(new Date());
    const [cleanDates, setCleanDates] = useState(false);
    let formattedStartDate = useRef(""),
        formattedFinishDate = useRef("");

    useEffect(() => {

        if (cleanDates === true) {
            document.getElementById("StartDate").value = "";
            document.getElementById("FinishDate").value = "";
            formattedFinishDate.current = "";
            formattedStartDate.current = "";
            setCleanDates(false);
        }
    }, [cleanDates]);



    const handleDate = (newDate) => {
        setDateValue(newDate)
        formattedStartDate.current = newDate[0].getFullYear().toString() + '-' + (newDate[0].getMonth() + 1).toString() + "-" + newDate[0].getDate().toString();
        formattedFinishDate.current = newDate[1].getFullYear().toString() + '-' + (newDate[1].getMonth() + 1).toString() + "-" + newDate[1].getDate().toString();
    }
    // eslint-disable-next-line no-unused-vars
    const onSubmit = (newIncapacity) => {
        if (formattedStartDate.current === "" && formattedFinishDate.current === "") {
            alert("Debe seleccionar un rango de fechas!");
        } else {
            newIncapacity.fechaInicio = formattedStartDate.current;
            newIncapacity.fechaFin = formattedFinishDate.current;

            // 1. Crear incapacidad
            createIncapacity({
                fecha_inicio: newIncapacity.fechaInicio,
                fecha_fin: newIncapacity.fechaFin,
                cedula_empleado: 1,
                // cedula_empleado: localStorage.getItem("cedula"), //TODO: Cuando hagamos el login
                tipo_incapacidad: parseInt(newIncapacity.tipoIncapacidad, 10),
                entidad: parseInt(newIncapacity.entidad, 10)
            }).then(
                (res) => {
                    // 2. Subir documentos
                    const formData = new FormData();
                    formData.append("incapacidad", res.id);
                    for (let key in newIncapacity.files) {
                        formData.append(key, renameFile(key, newIncapacity.files[key][0]));
                    }

                    // To test FormData
                    // for (var pair of formData.entries()) {
                    //     console.log(pair[0] + ', ' + pair[1].name);
                    // }
                    return createDocument(formData);
                }
            ).then((res) => {
                console.log(res);
                // alert("Incapacidad y documentos subidos correctamente!");
            }).catch(err => console.warn(err));
        }
    }
    const onError = (e) => {
        alert(`Tiene errores en su registro.`);
        console.log(e);
    }

    return (
        <div id="incapacities-container" className="d-flex flex-column align-items-center">
            <p className="px-5">
                TODO: Escribr un mensaje descriptivo sobre la subida de arhcivos de incapacidades.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid amet fuga, quasi dolor deleniti velit provident explicabo ipsum,
                itaque temporibus, laboriosam labore inventore adipisci quia ab. Optio perferendis quas aperiam.</p>
            <div className="flex-grow-1 w-75">
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Row>
                        <Col className='my-auto d-flex flex-column justify-content-evenly'>
                            <Form.Group className='py-2' controlId='formHealthEntity'>
                                <Form.Label>Entidad</Form.Label>
                                <Form.Select {...register("entidad")} required>
                                    <option>Seleccionar</option>
                                    <option value="1">EPS</option>
                                    <option value="2">ARL</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formIncapacityFilie" className="py-2">
                                <Form.Label>Tipo de incapacidad</Form.Label>
                                <Form.Select {...register("tipoIncapacidad")} required>
                                    <option>Seleccionar</option>
                                    <option value="1">ENFERMEDAD GENERAL</option>
                                    <option value="2">ACCIDENTE TRAFICO</option>
                                    <option value="3">ACCIDENTEL ABORAL</option>
                                    <option value="4">LICENSIA MATERNIDAD</option>
                                    <option value="5">LICENSIA PATERNIDAD</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formIncapacityFile" className="py-2">
                                <Form.Label>Documento de incapacidad</Form.Label>
                                <Form.Control type="file" size="sm" className='w-100'{...register("files.INCAPACIDAD", { required: true })} required />
                            </Form.Group>

                        </Col>
                        <Col>
                            {/* 
                            Entidad
                            Tipo de incapacidad
                            Fecha de incio y de fin
                            */}
                            <div className="d-flex flex-column justify-content-around">
                                <Form.Label>Rango de fechas</Form.Label>
                                <div>
                                    <InputGroup className="mb-3">
                                        <Form.Control id="StartDate" placeholder="Inicio" readOnly value={formattedStartDate.current} />
                                        <Form.Control id="FinishDate" placeholder="Fin" readOnly value={formattedFinishDate.current} />
                                        <span role="button" onClick={() => setCleanDates(true)} id="cleanDatesBuisnessInteligence">
                                            <MdCleaningServices />
                                        </span>
                                    </InputGroup>
                                </div>
                                <Calendar value={dateValue} onChange={handleDate} selectRange={true} goToRangeStartOnSelect={true} />
                            </div>
                        </Col>
                    </Row>
                    <div className='text-center py-3'><Button type="submit">Subir incapacidad</Button></div>
                </Form>
            </div>
        </div>
    )
}
