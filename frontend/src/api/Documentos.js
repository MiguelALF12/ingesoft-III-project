const URL = "http://localhost:8000/incapacity_management_core/api/v1/documentos/";

export const createDocument = async (newDocument) => {
    // console.log("newDocument: ", newDocument.entries());
    return await fetch(URL, {
        "method": 'POST',
        "body": newDocument,
        "Content-Type": "multipart/form-data",
    }).then((res) => res.json());
}

export const getDocuments = async () => {
    return await fetch(URL, {
        "method": 'GET',
        "headers": {
            "Content-Type": "multipart/form-data"
        }
    }).then((res) => res.json());
}

export const getDocumentsByEmployee = async (employeeId) => {
    return await fetch(URL + employeeId + "/documentsbyemployee/", {
        "method": 'GET',
        "headers": {
            'Accept': '*/*',
            'User-Agent': 'request',
        }
    }).then((res) => res.blob());
}