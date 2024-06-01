import React, { useEffect, useState } from 'react';
import './ModosdeJuego.css'

const GameModes = () => {
    const [gameModes, setGameModes] = useState([]);
  
    useEffect(() => {
      // Llama a la API para obtener los datos
      fetch('https://valorant-api.com/v1/gamemodes')
        .then(response => response.json())
        .then(data => {
          // Filtra los datos para excluir los que tienen displayIcon null
          const filteredData = data.data.filter(mode => mode.displayIcon !== null);
          setGameModes(filteredData);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);
  
    // Divide los registros en 3 columnas
    const splitIntoColumns = (data) => {
      const columns = [[], [], []];
      data.forEach((item, index) => {
        if (index < 3) {
          columns[0].push(item);
        } else if (index < 6) {
          columns[1].push(item);
        } else {
          columns[2].push(item);
        }
      });
      return columns;
    };
  
    const columns = splitIntoColumns(gameModes);
  
    return <>
    <div className='background-image'>
    <h1 className='titulo-gamemodes'>Modos de Juego</h1>
      <div className="columns">
        {columns.map((column, columnIndex) => (
          <div className="column">
            {column.map((mode) => (
              <div className="menu-div">
                <img src={mode.displayIcon} alt={`${mode.displayName} icon`} />
                <div>
                  {mode.displayName === "Standard" ? (
                    <a href="/competitivo" target="otro" className='enlacecompeti' title="Haz clic para más información">
                      Competitivo
                    </a>
                  ) : (
                    mode.displayName
                  )}
                </div>
                <div>{mode.duration}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </>;
  };
  
  export default GameModes;