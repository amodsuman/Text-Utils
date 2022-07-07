import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212121';
      showAlert("Dark mode has been enabled.", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <> 
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below:" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>          
        </div>
      </Router>
    </>
  );
}

export default App;