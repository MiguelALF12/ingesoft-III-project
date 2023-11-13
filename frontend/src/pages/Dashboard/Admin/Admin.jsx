import { useState, useMemo, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

import "./Admin.css"
import { getEmployees } from '../../../api/Empleados';
import AuthHeader from "../../../components/Layout/Header/AuthHeader"
import Filter from '../../../components/Filter/Filter';
import Pagination from "../../../components/Layout/Pagination/Pagination";
import NominaTable from "./NominaTable"
import UserIncapacities from './UserIncapacities';
import Footer from '../../../components/Layout/Footer/Footer';

let PageSize = 10;

export default function Admin() {

    const [currentPage, setCurrentPage] = useState(1);
    const [employees, setEmployees] = useState([])
    const [employeesFromQuery, setEmployeesFromQuery] = useState([]);
    const [clickedEmployee, setClickedEmployee] = useState(["", ""]);

    // Pagination
    const listedEmployees = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        //     return employees.slice(firstPageIndex, lastPageIndex);
        // }, [currentPage, employees]);
        if (employeesFromQuery.length > 0) {
            if (firstPageIndex > employeesFromQuery.length) {
                setCurrentPage(1);
            }
            return employeesFromQuery.slice(firstPageIndex, lastPageIndex);
        } else {
            return employees.slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, employees, employeesFromQuery]);


    useEffect(() => {
        const loadEmployees = async () => {
            const res = await getEmployees();
            // const contractsRes = await listContract();
            // // getEmployeeRole(employeesRes, contractsRes);
            // setContracts(contractsRes);
            setEmployees(res);

        }
        loadEmployees();
    }, []);

    // Setting Delete and update actions:
    const handleClickedEmployee = (newAction) => {
        setClickedEmployee(newAction)
    }


    return (
        <div id="admin-container">
            <AuthHeader />
            <Row id="admin-subcontainer" className="justify-content-center py-4">
                <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
                    <Filter employees={employees} employeesFromQuery={setEmployeesFromQuery} />
                    <NominaTable employees={listedEmployees} action={handleClickedEmployee} />
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={employeesFromQuery.length > 0 ? employeesFromQuery.length : employees.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </Col>
                <Col xs={12} md={4} lg={4} xl={4} xxl={4} >
                    {clickedEmployee[0] !== "" && clickedEmployee[1] !== "" ? <UserIncapacities employee={employees.find(employee => employee.id == clickedEmployee[1])} /> :
                        <div id="employee-not-selected-text">
                            <p className='text-center pt-4'>Seleccione un usuario para visualizar sus incapacidades registradas</p>
                        </div>}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
