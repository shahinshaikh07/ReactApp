import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, { useState } from 'react';

function App() {
const [alert, setAlert] = useState(null);
const [mode, setMode] = useState('light');

const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (<>
  <Navbar  title="WriteOn" mode={mode} toggleMode={toggleMode} key={new Date()}/>
  <Alert alert={alert}/>
  <Textform showAlert={showAlert}  heading="Enter text here" mode= {mode}/>

  </>
  );
}

export default App;
