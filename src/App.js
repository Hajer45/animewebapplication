import Navbar from './Components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Anime from './Components/Anime';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/anime/:id" element={<Anime/>}/>
      <Route path="/character/:id" element={<Gallery />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
