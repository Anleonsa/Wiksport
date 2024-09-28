import React, { useState, useEffect, useRef } from 'react';
import css from './Chronometer.module.css'

const Chronometer = () => {
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (activo) {
      intervaloRef.current = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 10); // Intervalo de 10 ms para contar centésimas de segundo
    } else if (!activo && intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
    return () => clearInterval(intervaloRef.current);
  }, [activo]);

  const formatearTiempo = (centesimas) => {
    const minutos = Math.floor(centesimas / 6000);
    const segundos = Math.floor((centesimas % 6000) / 100);
    const centesimasRestantes = centesimas % 100;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}:${centesimasRestantes.toString().padStart(2, '0')}`;
  };

  const iniciar = () => setActivo(true);
  const pausar = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setTiempo(0);
  };

  return (
    <div>
      <span className={css.time}>{formatearTiempo(tiempo)}</span>
      <div className={css.buttons_container}>
        {!activo && <button onClick={iniciar} className={css.play_btn}>
          <i className="fa-solid fa-play"></i>
        </button>}
        {activo && <button onClick={pausar} className={css.pause_btn}>
          <i className="fa-solid fa-pause"></i>
        </button>}
        <button onClick={reiniciar} className={css.reset_btn}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Chronometer;