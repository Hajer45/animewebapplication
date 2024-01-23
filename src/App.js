import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import { PopularAnimes } from './Components/PopularAnimes';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <PopularAnimes/>
    </BrowserRouter>
  );
}

export default App;
