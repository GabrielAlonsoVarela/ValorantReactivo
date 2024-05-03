import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mapas.css';

const Mapas = () => {
  const [mapas, setMapas] = useState([]);
  const [mapaActualIndex, setMapaActualIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/maps');
        setMapas(response.data.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  const mapaActual = mapas[mapaActualIndex] || {};

  const SiguienteMapa = () => {
    setMapaActualIndex((prevIndex) => (prevIndex + 1) % mapas.length);
  };

  const AnteriorMapa = () => {
    setMapaActualIndex((prevIndex) =>
      prevIndex === 0 ? mapas.length - 1 : prevIndex - 1
    );
  };

  const fondopantalla = {
    backgroundImage: `url(${mapaActual.splash})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <div className='main' style={fondopantalla}>
        <button onClick={AnteriorMapa}>🡸</button>
      <div className='infomapa'>
        <h2 className='mapanombre'>{mapaActual.displayName}</h2>
        <p className='mapadesc'>{mapaActual.tacticalDescription}</p>
        <img className='mapa' src={mapaActual.displayIcon} alt={mapaActual.displayName} />
      </div>
      <button onClick={SiguienteMapa}>🡺</button>
    </div>
  );
};

export default Mapas;