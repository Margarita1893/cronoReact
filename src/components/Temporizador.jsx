import React from 'react'

function Temporizador({tiempo}) {
    return (

        <div className="circulo">
            <p id="temporizador">
                <span>
                    {tiempo.h >= 10 ? tiempo.h: "0" + tiempo.h}
                </span>
                <span>:</span>
                <span>
                    {tiempo.m >= 10 ? tiempo.m: "0" + tiempo.m}
                </span>
                <span>:</span>
                <span>
                    {tiempo.s >= 10 ? tiempo.s: "0" + tiempo.s}
                </span>
                <span>:</span>
                <span>
                    {tiempo.mls >= 10 ? tiempo.mls: "0" + tiempo.mls}
                </span>
            </p>
        </div>
        
    )
}

export default Temporizador
