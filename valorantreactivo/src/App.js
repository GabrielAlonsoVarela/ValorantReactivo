import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contenedor from './Contenedor';
import Inicio from './pages/Inicio';
import Mapas from './pages/Mapas';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contenedor/>}>
          <Route index element={<Inicio/>}/>
          <Route path="inicio" element={<Inicio/>}/>
          <Route path="mapas" element={<Mapas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
