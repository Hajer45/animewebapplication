import { useMyContext } from './Context/context';
import Navbar from './Components/Navbar'
function App() {
  const context = useMyContext()
  console.log(context)
  return (
    <>
    <Navbar/>
    </>
  );
}

export default App;
