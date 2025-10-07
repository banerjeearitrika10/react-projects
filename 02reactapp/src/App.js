
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Form from './components/Form.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Form' element={<Form />}></Route>
      </Routes>
  );
}

export default App;
