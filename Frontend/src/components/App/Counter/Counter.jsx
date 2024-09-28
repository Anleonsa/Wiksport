import React, { useState } from 'react';
import css from './Counter.module.css'

const Counter = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const disminuir = () => setContador(Math.max(contador - 1, 0));
  const reset = () => setContador(0);

  return (
    <div>
      <span className={css.counter}>{contador}</span>
      <div className={css.buttons_container}>
        <button onClick={incrementar} className={css.btn_increase}>Incrementar</button>
        <button onClick={disminuir} className={css.btn_decrease}>Disminuir</button>
        <button onClick={reset} className={css.btn_reset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Counter;