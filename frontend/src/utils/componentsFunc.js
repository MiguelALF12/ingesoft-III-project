export const filterRecords = (records, filterOptions) => {

    return records.filter((record) => {
        if (filterOptions.parameter !== 'Seleccione') {
            switch (filterOptions.parameter) {
                // TODO: Deberiamos de quitar esto, no es bueno hacer busquedas por ID
                case 'id':
                    return record.id.toString() === filterOptions.pattern;
                case 'nombreEmpleado':
                    return record.nombre.toLowerCase() === filterOptions.pattern.toLowerCase() || record.nombre.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'apellidoEmpleado':
                    return record.apellido.toLowerCase() === filterOptions.pattern.toLowerCase() || record.apellido.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'cedula':
                    return record.cedula === filterOptions.pattern || record.cedula.includes(filterOptions.pattern);
                case 'departamentoEmpleado':
                    return record.departamento.toLowerCase() === filterOptions.departamento.toLowerCase() || record.departamento.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'fechaInicio':
                    return record.fecha_inicio === filterOptions.pattern || record.fecha_inicio.includes(filterOptions.pattern);
                case 'fechaFin':
                    return record.fecha_fin === filterOptions.pattern || record.fecha_fin.includes(filterOptions.pattern);
                default:
                    return true;
            }
        }
    });
}

// export const getNewPathBasedOnCurrentPath = (currentPath, newPath) => {
//     let path = currentPath.split('/');
//     path[path.length - 1] = newPath;
//     let newPathString = path.join('/');
//     console.log(newPathString);
//     return path.join('/');
// }