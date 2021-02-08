import React from 'react'

function Botones({iniciarContador, pararContador, resetearContador, grabarContador}) {
    return (
        <div className="btn-group mb-2 d-flex justify-content-center"
            role="group">
            <button onClick={ iniciarContador } 
                className="btn btn-success mr-2" id="iniciarS">
                <span className="d-none d-md-block">INICIAR</span>
                  <i className="fas fa-play-circle d-sm-block d-md-none"></i>
            </button>
            <button onClick={ pararContador }
                    className="btn btn-danger mr-2" id="parar">
                <span className="d-none d-md-block">PARAR</span>
                    <i className="fas fa-stop-circle d-sm-block d-md-none"></i>
            </button>
            <button onClick={ grabarContador }
                className="btn btn-info mr-2" id="grabar">
                  <span className="d-none d-md-block">GRABAR</span>
                    <i className="fas fa-record-vinyl d-sm-block d-md-none"></i>
            </button>
            <button onClick={ resetearContador } 
                className="btn btn-primary" id="resetear">
                <span className="d-none d-md-block">RESETEAR</span>
                  <i className="fas fa-chevron-circle-left d-sm-block d-md-none"></i>
            </button>
        </div>
    );
}

export default Botones;
