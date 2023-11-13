import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./UserIncapacities.css";
import IncapacitiesTable from './IncapacitiesTable';
import { getDocumentsByEmployee } from "../../../api/Documentos";
import { getIncapacitiesByEmployee } from "../../../api/Incapacidades";
// import { loadReturnedAplicantDocs } from "../../../utils/files";

export default function UserIncapacities({ employee }) {
    // const { register } = useForm();
    const [docsPerUser, setDocsPerUser] = useState([]);
    const [incapacitiesByUser, setIncapacitiesByUser] = useState([]);
    useEffect(() => {
        async function getDocuments() {
            const incapacitiesByEmployee = await getIncapacitiesByEmployee(employee.cedula);
            if (typeof (incapacitiesByEmployee) !== "undefined") {
                const docsByEmployee = await getDocumentsByEmployee(employee.cedula);
                setDocsPerUser(docsByEmployee);
                setIncapacitiesByUser(incapacitiesByEmployee);
            }
        }
        getDocuments()
    }, [employee.cedula]);
    return (
        <div className="pt-4">
            <h4>Incapacidades de <strong>{employee.id}-{employee.nombre}</strong></h4>
            <div className='d-flex flex-wrap'>
                <div id="incapacidadViewer">
                    <IncapacitiesTable docs={docsPerUser} incapacities={incapacitiesByUser} />
                </div>

            </div>
        </div>
    )
}

UserIncapacities.propTypes = {
    employee: PropTypes.object.isRequired,
}
