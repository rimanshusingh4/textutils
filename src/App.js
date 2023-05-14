import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      types:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const [Mode,setMode] = useState('light');
  const toGoggle = () =>{
    if(Mode === 'light'){
      console.log("dark mode enabled ok");
      setMode('dark');
      document.body.style.backgroundColor = '#3f3b3b';
      document.body.style.color= 'white';
      showAlert('Dark mode enable', 'success');
    }
    else{
      console.log("light mode enabled ok");
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode enable', 'success');
    }
  }
  return (
<>
    {/* <Router> */}
      <Navbar title="TEXTUTILS" Mode={Mode} toGoggle={toGoggle} usefulLink="Useful Links"/>
      <Alert alert={alert}/>
        <div className="container my-3">
        <Textform showAlert={showAlert} Heading="Enter Texts to Analyze." Mode={Mode}/>
        {/* <Routes>
          <Route exact path="/" element= {<Textform showAlert={showAlert} Heading="Enter Texts to Analyze." Mode={Mode}/>}></Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          </Routes> */}
        </div>
        {/* <div className="container">
          <Routes>
            
            <Route path="/" element={<Textform heading="Enter text to analyze"  Mode={Mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div> */}
        
    {/* </Router> */}
    </>
  );
}

export default App;