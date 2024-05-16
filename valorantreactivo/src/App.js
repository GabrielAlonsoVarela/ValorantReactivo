import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contenedor from './Contenedor';
import Inicio from './pages/Inicio';
import Mapas from './pages/Mapas';
import Acccesorios from './pages/Accesorios';
import Agentes from './pages/Agentes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contenedor/>}>
          <Route index element={<Inicio/>}/>
          <Route path="inicio" element={<Inicio/>}/>
          <Route path="mapas" element={<Mapas/>}/>
          <Route path="accesorios" element={<Acccesorios/>}/>
          <Route path="agentes" element={<Agentes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
