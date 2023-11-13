const URL = "http://localhost:8000/incapacity_management_core/api/v1/incapacidades/";


export const createIncapacity = async (newIncapacidad) => {
    return await fetch(URL, {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(newIncapacidad)
    }).then((res) => {
        console.log(res);
        return res.json();
    });
};

export const getIncapacitiesByEmployee = async (employeeId) => {
    return await fetch(URL + employeeId + "/incapacitiesbyuser/", {
        "method": 'GET',
        "headers": {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.json();
    });
};

// TODO: Añadir edit y delete de 