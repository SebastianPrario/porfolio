import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Pdf from './../../assets/CV.pdf'
import { useLocation } from 'react-router-dom';

function Navs () {
    
const location = useLocation().pathname

  const onResumeClick = () => {
   window.open(Pdf);
 };

   return (

      <Nav className='d-md-flex fixed-top   justify-content-center bg-secondary' 
         activeKey="/"
         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
         <Nav.Item >
            <Nav.Link>
              { location=="/" ?
              (<ScrollLink to="home" className="text-white">Inicio</ScrollLink>):
              ( <RouterLink to="/" className="text-white">Inicio</RouterLink>)}
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link>
               <RouterLink to="/about#sobremi"className="text-white">Sobre Mí</RouterLink>
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link>
            <RouterLink to="stack"className="text-white">Tecnologías</RouterLink>
               </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link>
               <RouterLink to="projects"className="text-white">Proyectos</RouterLink>
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link>
               <RouterLink to="contact"className="text-danger">Contactame</RouterLink>
            </Nav.Link>
         </Nav.Item>
         
            <Button 
            onClick={onResumeClick}
            className='offset-1 bg-dark px-4 py-1' >
               Mi CV
            </Button>
        
      </Nav>
   )
}

export default Navs
