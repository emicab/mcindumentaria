import DatosEscuelas from '../../mock/dataset.json'

export const obtenerNombreEscuela = () => {
    const nombreEscuelas = DatosEscuelas.map(e => e.nombre)
    return nombreEscuelas
}
export const obtenerIdProducto = ({id}) => {
    const idProducto = DatosEscuelas.find(e => e.id === id)
    return idProducto
}

export const obtenerDatosEscuela = escuela => {
    const schoolData = DatosEscuelas.find(e => e.nombre === escuela)
    return schoolData
}