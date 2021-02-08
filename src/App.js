import React, { useState } from 'react';
import Saludo from './components/Saludo';
import ColContainer from './container/ColContainer';
import CronoContainer from './container/CronoContainer';
import Temporizador from './components/Temporizador';
import Botones from './components/Botones';
import ListTime from './components/ListTime';
import './App.css';


function App() {

  const [tiempo, setTiempo] = useState({
    
    h:0,
    m:0,
    s:0,
    mls:0,
    timeStarted:0

  });
  
  const [intervalo, setInter] = useState()
  const [save, setSave] = useState([]);

  let timeh = tiempo.h,
      timem= tiempo.m,
      times= tiempo.s,
      timemls= tiempo.mls //estas las vamos a llamar en tro componente para que nos la muestre.

//   temporizador = document.getElementById('temporizador');
//   iniciar = document.getElementById('iniciarS');
//   resetear = document.getElementById('resetear');
//   parar = document.getElementById('parar');
//   grabar = document.getElementById('grabar');
//   almacenarTiempos = document.getElementById('almacenarTiempos');

//   event();

// const event = () => {
//   iniciar.addEventListener('click', iniciarContador);
//   resetear.addEventListener('click', resetearContador);
//   parar.addEventListener('click', pararContador);
//   grabar.addEventListener('click', grabarContador);
// }

const contar = () => {
  // let ht, mt, st, mlst;
  timemls++;

  if (timemls > 99) {
    times++;
    timemls = 0;
  }
  if (times > 59) {
    timem++;
    times = 0;
  }
  if (timem > 59) {
    timeh++;
    timem = 0;
  }
  if (timeh > 24) timeh = 0;

  return setTiempo({
    
    h: timeh,
    m: timem,
    s: times,
    mls: timemls,
    
  });

  // mlst = ('0' + timemls).slice(-2);
  // st = ('0' + times).slice(-2);
  // mt = ('0' + m).slice(-2);
  // ht = ('0' + h).slice(-2);

  // temporizador.innerHTML = `${ht}:${mt}:${st}:${mlst}`;
}

const iniciarContador = () => {
  contar();
  setInter(setInterval(contar, 10));
  /*iniciar.removeEventListener('click', iniciarContador);*/
}

const pararContador = () => {
  clearInterval(intervalo);
  // iniciar.addEventListener('click', iniciarContador);
}

const resetearContador = () => {
  setTiempo({h:0, m:0, s:0, mls:0});
  setSave([])
  clearInterval(intervalo);
  // temporizador.innerHTML = '00:00:00.00';

  // iniciar.addEventListener('click', iniciarContador);
  // while (almacenarTiempos.firstChild) {
  //   almacenarTiempos.removeChild(almacenarTiempos.firstChild);
  // }
};

const grabarContador = () => {
  setSave([
    ...save,
    {
      h: timeh,
      m: timem,
      s: times,
      mls: timemls, 
     },
    ])
  }

//   if (temporizador.textContent === '00:00:00.00') {
//     console.log('click en el botón iniciar');
//   } else {
//     let p = document.createElement('ul');
//     p.innerHTML = `
//         <li>temporizador: ${h}:${m}:${s}.${mls}</li>
//     `;
//     almacenarTiempos.appendChild(p);
//   }
// }
  return (
    <>
      <CronoContainer>
        <ColContainer>
          <Saludo />
          <Temporizador tiempo={ tiempo }/>
          <Botones 
            iniciarContador={ iniciarContador }
            pararContador={ pararContador }
            grabarContador={ grabarContador }
            resetearContador={ resetearContador } 
          />
          <ListTime save= { save }/>
        </ColContainer>
      </CronoContainer>
    </>
  );
};

export default App;
