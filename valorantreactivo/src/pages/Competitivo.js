import React, { useEffect, useState } from 'react';
import './Competitivo.css';

const Competitivo = () => {
  const [tiers, setTiers] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04')
      .then(response => response.json())
      .then(data => {
        const filteredTiers = data.data.tiers.filter(tier => tier.tier >= 3 && tier.tier <= 27);
        setTiers(filteredTiers);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);


  const splitIntoColumns = (data) => {
    const columns = [[], [], [], [], [], [], [], [], []];
    const chunkSize = Math.ceil(data.length / columns.length);

    /*for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      columns[i / chunkSize] = chunk.reverse();
    }*/

    for (let i = 0; i<columns.length; i++){
      const chunk = data.slice(i * chunkSize, i * chunkSize + chunkSize);
      columns[i] = chunk.reverse()
    }

    return columns;
  };

  const columns = splitIntoColumns(tiers);

  return (
    <div className='bg-image'>
        <h1 className='titulocompe'>Rangos Competitivo</h1>
    <div className="columns">
      {columns.map((column, columnIndex) => (
        <div className="column" key={columnIndex}>
          {column.map((tier) => (
            <div className="tier-item" key={tier.tier}>
              {tier.smallIcon && <img src={tier.smallIcon} alt={`${tier.tierName} icon`} />}
              <div>{tier.tierName}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Competitivo;