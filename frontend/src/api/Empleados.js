const URL = "http://localhost:8000/incapacity_management_core/api/v1/empleados/";

export const authenticateUser = async (credentials) => {
    return await fetch(
        URL + "authenticate/", {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(credentials)
    }).then((res) => res.json());
}

export const getEmployees = async () => {
    return await fetch(URL,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}

export const getEmployeesById = async (identification) => {
    return await fetch(URL + identification,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}


