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
      <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/about' element={<About/> }/>
      <Route path='/stack' element={<Stack/> }/>
      <Route path='/projects' element={<Projects/> }/>
      <Route path='/contact' element={<Contact/> }/>
        </Routes>
    </div>
  )
}

export default App
