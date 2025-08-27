import Home from './Components/Home/Home.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import  About  from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import  Stack  from './Components/Stack/Stack.jsx';
import  Navs from './Components/Nav/Navs.jsx';
import Contact from './Components/Contact/Contact.jsx';

function App() {
  
  return (
    <div>
    <Navs/>
    <Home/> 
    </div>
  )
}

export default App
