import DatosEscuelas from '../../mock/dataset.json'

export const obtenerNombreEscuela = () => {
    const nombreEscuelas = DatosEscuelas.map(e => e.nombre)
    return nombreEscuelas
}


export const obtenerDatosEscuela = escuela => {
    const schoolData = DatosEscuelas.find(e => e.nombre === escuela)
    return schoolData
}