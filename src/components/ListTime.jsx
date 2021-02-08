import React from 'react'

function ListTime({save}) {
    return (
        <div>
            <h5>Tiempos grabados</h5>
                <ul>
                    {save.map((value, hour) => (
                    <li key={hour}>{`${("0"+value.h.toString()).slice(-2)}:${("0"+value.m.toString()).slice(-2)}:${("0"+value.s.toString()).slice(-2)}:${("0"+value.mls.toString()).slice(-2)}`}
                    {console.log(("0"+value.s.toString()).slice(-2))}
                    </li>

                    ))}
                </ul>
        </div>
    )
}

export default ListTime
