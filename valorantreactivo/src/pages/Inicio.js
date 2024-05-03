import valogo from '../images/Valogo.png';
import vanombre from '../images/Valonombre.png';
import './Inicio.css'

const Inicio = () => {
return<>
<div className='background-image'>
<img className='Logo' src={valogo} alt='Logo de Valorant' />
<img className='nombre' src={vanombre} alt='Logo de Valorant'/>
<p className='pinicio'>La base de datos de Valorant Reactivo es una herramienta integral diseñada para satisfacer la creciente demanda de información detallada sobre el juego. Ofrece datos exhaustivos sobre agentes, mapas, armas y estrategias, desde conceptos básicos hasta tácticas avanzadas. Sea cual sea tu nivel de habilidad, nuestra base de datos te proporciona la información necesaria para mejorar tu juego y sumergirte en la emocionante experiencia de Valorant.</p>
</div></>
}

export default Inicio;