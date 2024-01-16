import React, { useEffect, useState } from 'react';
import { obtenerDatosEscuela } from '../controllers/getData';
import DoubleArrowRight from '../ui/DoubleArrowRight';
import { Link } from 'react-router-dom';
import { useMiContexto } from '../context/useContext';

const CardSchool = () => {
    const { escuela, productoEscuela, setProductoEscuela } = useMiContexto()
    
    useEffect(() => {
      setProductoEscuela(obtenerDatosEscuela(escuela))
    }, [escuela])
    

    const talles = ["S", "M", "L", "XL"]

    console.log(productoEscuela)
    return (
        <>
            {
                productoEscuela?.uniforme.map((uniforme) => (
                    <div key={uniforme.id} className='flex flex-col justify-center items-center w-11/12 mx-auto my-2 rounded overflow-hidden border-[1px]'>
                        <img src={uniforme.imagen} alt={uniforme.descripcion} className='w-80 my-2' />
                        <div className=' w-full h-20'>
                            <p className='uppercase text-xl text-center p-1 my-2 font-bold text-blue-500'>{uniforme.descripcion}</p>
                        </div>
                        <Link to={`/uniformes/${uniforme.id}`} className='flex bg-blue-500 px-4 py-2 m-2 rounded items-center justify-evenly cursor-pointer'>
                            <button className=' text-slate-50 '>Ver más</button>
                            <DoubleArrowRight classes={'w-5 h-5 text-slate-50 ml-5'} />
                        </Link>
                    </div>
                ))
            }
        </>
    );
};

export default CardSchool;

