import './App.css';
import Navbaar from './components/Navbaar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//let name ="Praveen";
//let workspace = "!! Welcome to React work space !!";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // State for alert
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08213d';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Praveen - Dark Mode";
    } else {
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Praveen - Light Mode";
    }
  };

  return (
    <>
        {/* <Navbaar  title="TextUtils" aboutText="AboutUs123"/> */}
      {/* <Navbaar/> */}
      {/* <Router> */}
        <Navbaar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div> 
          {/* <Routes>  */}
          {/* //exact path is used for the exact path matching otherwise react will match partialy path 
          /users----compnent1
          /users/home ----compnent2
          */}

            {/* <Route exact path="/about" element={<About />} />  */}
            {/* <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />} /> */}
          
              <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
            

          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;


