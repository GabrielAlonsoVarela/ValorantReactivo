import {Outlet} from 'react-router-dom';

const Contenedor = () =>{
    return <>
    <h1>Aqui va la barra</h1>
    <Outlet/>
    </>
}

export default Contenedor;