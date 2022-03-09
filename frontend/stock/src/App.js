import Detail from "./Pages/Detail";
import Homepage from "./Pages/Homepage";
import Navbar from "./Pages/Navbar";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import CreateStock from "./Pages/CreateStock";

function App() {
  return (
    <div>
      <Router>

      <Navbar/>
      <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/detail" element={<Detail/>}/>
    <Route path="/add" element={<CreateStock/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
