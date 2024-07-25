import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import BasicTable from './BasicTable';
import Pichart from './Pichart';
import Togglebtn from './Togglebtn';
import Selectcategory from './Selectcategory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/BasicTable" element={<BasicTable />} />
          <Route path="/Pichart" element={<Pichart />} />
          <Route path="/Togglebtn" element={<Togglebtn />} />
          <Route path="/Selectcategory" element={<Selectcategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
