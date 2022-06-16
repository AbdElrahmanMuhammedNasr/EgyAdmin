import Side from './UI/side';
import NavBar from './UI/nav';
import Sliders from './Components/sliders';
import About from './Components/about';
import BestOffer from './Components/bestOffer';
import Services from './Components/service';
import Projects from './Components/project';
import Testmonials from './Components/testmonalis';
import Partner from './Components/partner';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ height: '100vh', backgroundColor: 'red', overflow: 'hidden' }}>
      <NavBar />
      <div className='row' style={{ height: '100vh', backgroundColor: 'whitesmoke' }} >
        <div className='col-2' style={{backgroundColor:'green',paddingRight:'0px'}}>
          <Side />
        </div>
        <div className='col-10'>
          <Routes>

            <Route
              path="/"
              element={<Navigate to="/slider" replace />}
            />
            <Route path='/slider' element={<Sliders />} />
            <Route path='/offer' element={<BestOffer />} />
            <Route path='/service' element={<Services />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/testmonials' element={<Testmonials />} />
            <Route path='/partner' element={<Partner />} />
            <Route path='/about' element={<About />} />

          </Routes>

      
        </div>

      </div>

    </div>
  );
}

export default App;
