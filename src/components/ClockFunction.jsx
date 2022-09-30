import React, {useEffect, useState} from 'react';

const ClockFunction = () => {
    // Estado privado del componente
    const initialState = {
        // Se genera una fecha como estado inicial del componente
        date: Date(),
        edad: 0,
        nombre: 'Miguel Angel',
        apellidos: 'Jurado'
    }

    const [state, setstate] = useState(initialState);

    const tick = ()=>{
        setstate({
            edad: state.edad + 1,
            fecha: new Date().toLocaleTimeString()
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            tick();
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [state.edad]);

    return (
        <div>
            <h2>
            Hora Actual: {state.fecha}
            </h2>
            <h3>Nombre: {initialState.nombre} {initialState.apellidos}</h3>
            <h3>Edad: {state.edad} </h3>

        </div>
    );
}

export default ClockFunction;
