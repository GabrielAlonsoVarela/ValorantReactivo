import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Agentes.css'

const Agentes = () => {
    const [agentsData, setAgentsData] = useState([]);
    const [selectedAgentIndex, setSelectedAgentIndex] = useState(0);
    const [selectedAbilityIndex, setSelectedAbilityIndex] = useState(null);

    useEffect(() => {
        const fetchAgentsData = async () => {
            try {
                const response = await axios.get('https://valorant-api.com/v1/agents');
                // Filtrar los agentes para obtener solo los personajes jugables
                const playableAgents = response.data.data.filter(agent => agent.isPlayableCharacter);
                setAgentsData(playableAgents);
            } catch (error) {
                console.error('Error fetching agents data:', error);
            }
        };

        fetchAgentsData();
    }, []);

    const handleAbilityClick = (index) => {
        setSelectedAbilityIndex(index);
    };

    const handleNextAgent = () => {
        setSelectedAgentIndex(prevIndex => (prevIndex === agentsData.length - 1 ? 0 : prevIndex + 1));
        setSelectedAbilityIndex(null); // Reiniciar el índice de la habilidad al cambiar de agente
    };

    const handlePreviousAgent = () => {
        setSelectedAgentIndex(prevIndex => (prevIndex === 0 ? agentsData.length - 1 : prevIndex - 1));
        setSelectedAbilityIndex(null); // Reiniciar el índice de la habilidad al cambiar de agente
    };

    const agent = agentsData[selectedAgentIndex];

    if (!agent) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se cargan los datos
    }

    return (
        <div className="agent-page">
            <button onClick={handlePreviousAgent}>🡸</button>
            <div className='agent-photo'>
                <img src={agent.fullPortrait} alt={agent.displayName} />
            </div>
            <div className='info'>
                <div className="agent-info">
                    <div className='namedesc'>
                        <h2>{agent.displayName}</h2>
                        <p>{agent.description}</p>
                    </div>
                    <div className="role">
                        <img src={agent.role.displayIcon} alt={agent.role.displayName} />
                    </div>
                </div>
                <div className='mainabilities'>
                    <div className="abilities">
                        {agent.abilities.map((ability, index) => (
                            <div className={`ability ${selectedAbilityIndex === index ? 'selected' : ''}`} onClick={() => handleAbilityClick(index)}>
                                <img src={ability.displayIcon} alt={ability.displayName} className='iconon' />
                                <p>{ability.displayName}</p>
                            </div>
                        ))}
                    </div>
                    {selectedAbilityIndex !== null && (
                        <div className="ability-description">
                            <h3>Description:</h3>
                            <p>{agent.abilities[selectedAbilityIndex].description}</p>
                        </div>
                    )}
                </div>
            </div>
            <button onClick={handleNextAgent}>🡺</button>
        </div>
    );
};

export default Agentes;