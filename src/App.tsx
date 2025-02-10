import './App.css'
import { Route, Routes } from 'react-router-dom';
import PlantillaCetificacion from './Plantilla_1/PlantillaCetificacion';
import Plantilla2 from './Plantilla_2/Plnatilla2';
import Menu from './Menu';
import Plantilla3 from './Plantilla_3/plantilla_3';
import Plantilla4 from './plantilla_4/Plantilla4';

function App() {

  return(
    <div className='container'>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/plantilla1" element={<PlantillaCetificacion/>} />
        <Route path="/plantilla2" element={<Plantilla2/>} />
        <Route path="/plantilla3" element={<Plantilla3/>} />
        <Route path="/plantilla4" element={<Plantilla4/>} />
      </Routes>
    </div>
  )

}

export default App