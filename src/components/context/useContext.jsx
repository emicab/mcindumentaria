import React, { createContext, useContext, useState } from 'react';

// Cambia el nombre del contexto para evitar conflictos con la función useContext
const MiContexto = createContext();

export const MiContextoProvider = ({ children }) => {
    const [escuela, setEscuela] = useState();
    const [productoEscuela, setProductoEscuela] = useState()


    return (
        <MiContexto.Provider value={{ escuela, setEscuela, productoEscuela, setProductoEscuela }}>
            {children}
        </MiContexto.Provider>
    );
};

export const useMiContexto = () => {
    // Utiliza el contexto creado, no la función useContext
    return useContext(MiContexto);
};
