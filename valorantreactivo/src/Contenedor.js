import { Link, Outlet } from "react-router-dom";
import './Contenedor.css';

const Contenedor = () =>{
    return <>
    <div className="Menu">
    <Link to='http://localhost:3000/Inicio'>Inicio</Link>|
    <Link to='http://localhost:3000/Agentes'>Agentes</Link>|
    <Link to='http://localhost:3000/Armas'>Armas</Link>|
    <Link to='http://localhost:3000/Mapas'>Mapas</Link>|
    <Link to='http://localhost:3000/Modos'>Modos de Juego</Link>|
    <Link to='http://localhost:3000/Accesorios'>Accesorios</Link>
    </div>
    <Outlet/>
    </>
}

export default Contenedor;