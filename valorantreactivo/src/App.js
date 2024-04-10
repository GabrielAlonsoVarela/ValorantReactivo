import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contenedor from './Contenedor';
import Inicio from './pages/Inicio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Contenedor/>}>
          <Route index component={<Inicio/>}/>
          <Route path="inicio" component={<Inicio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
