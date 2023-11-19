import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Contact from './Contact'
import Navs  from "./Navs";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";
import Hello from "./Hello"




function Home() {

   return (
      <Container id='home'>
         <Hello/>
         <Navs/>
       
         <Card  style={{height:"1000px"}} className='my-5' >
             <About style={{height:"400px"}}/>
         </Card>
        
         <Stack/> 
         <Projects/>
         <div className='mt-5 bg-primary-10'>
            <Contact /> 
         </div>
         
      </Container>
   )
}

export default Home
