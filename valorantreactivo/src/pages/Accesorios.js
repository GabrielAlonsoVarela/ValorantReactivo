import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accesorios.css'

const Accesorios = () => {
  const [recuadrosData, setRecuadrosData] = useState([]);
  const [contenedoresData, setContenedoresData] = useState([]);
  const [buddiesData, setBuddiesData] = useState([]);

  useEffect(() => {
    const fetchRecuadrosData = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/playertitles');
        setRecuadrosData(response.data.data);
      } catch (error) {
        console.error('Error fetching recuadros data:', error);
      }
    };

    const fetchContenedoresData = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/playercards');
        setContenedoresData(response.data.data);
      } catch (error) {
        console.error('Error fetching contenedores data:', error);
      }
    };

    const fetchBuddiesData = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/buddies');
        setBuddiesData(response.data.data);
      } catch (error) {
        console.error('Error fetching buddies data:', error);
      }
    };

    fetchRecuadrosData();
    fetchContenedoresData();
    fetchBuddiesData();
  }, []);

  const handleItemClick = (largeArt) => {
    window.open(largeArt, 'otra');
  };

  return <>
    <h1 className='acch1'>Accesorios</h1>
    <div className='mainacc'>
      <div className='titulo'>
        <h2 className='acch2'>Titulos de Jugador</h2>
        {recuadrosData.map(item => (
          <div className="recuadro">
            <h5>{item.titleText}</h5>
          </div>
        ))}
      </div>
      <div className='tarjeta'>
        <h2 className='acch2'>Tarjetas de Jugador</h2>
        {contenedoresData.map(item => (
          <div className="contenedor" onClick={() => handleItemClick(item.largeArt)}>
            <img src={item.displayIcon} alt={item.displayName} />
            <h5>{item.displayName}</h5> 
          </div>
        ))}
      </div>
      <div className='accarma'>
        <h2 className='acch2'>Accesorios de Arma</h2>
        {buddiesData.map(item => (
          <div className="buddy" onClick={() => handleItemClick(item.displayIcon)}>
            <img src={item.displayIcon} alt={item.displayName} />
            <h5>{item.displayName}</h5>
          </div>
        ))}
      </div>
    </div>
    </>;
};

export default Accesorios;