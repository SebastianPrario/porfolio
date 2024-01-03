import { Container, Image , Col, Row} from 'react-bootstrap';
import Contact from './Contact'
import Navs  from "./Navs";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";
import Hello from "./Hello"
import SocialLinks from './SocialLinks';
import cartel from '../assets/apple.jpg'
import river from '../assets/river.jpg'
import cartel2 from '../assets/cartel2.png'
import talent from '../assets/talent.png'
import soda from '../assets/soda.jpg'
import bici from '../assets/bici.png';


function Home() {


   return (
      <Container id='home'>
       
         <Hello/>
         <Navs/>
         {/* componente about */}
         <Row>  
            <Col className='d-none d-md-flex col-lg-2'>
               <Row className=' d-none d-md-flex py-4 my-4 align-content-start'>
               <Image  rounded className="mx-auto my-2 "style={{height:"300px", width:"300px"}}
                  src={soda} alt='foto' />
                  <Image  roundedCircle className="mt-4 pt-4"style={{height:"340px", width:"380px"}}
                  src={bici} alt='foto' />
               </Row>
            </Col>
            <Col >
               <About />
            </Col>   
         </Row>
         {/* componente Stack */}
         <Stack/> 
         {/* componente Projects */}
         <Row>
            <Col className='d-none d-md-flex col-3'>
               <Row className=' d-none d-md-flex py-4 my-4'>
               <Image  roundedCircle className="mx-auto my-2 "style={{height:"200px", width:"220px"}}
                  src={cartel} alt='foto' />
                  <Image  className="mx-auto my-4 "style={{height:"200px", width:"400px"}}
                  src={talent} alt='foto' />
                  <Image  roundedCircle className="mx-auto "style={{height:"240px", width:"280px"}}
                  src={river} alt='foto' />
               </Row>
            </Col>
            <Col >
               <Projects/>
            </Col>   
         </Row>
         {/* componente Contact */}  
         <Row >
            <Col className='d-none d-md-flex' >
               <Row className=' d-none d-md-flex cd '>
                 <Image   style={{height:"700px", width:"600px"}}
                  src={cartel2} alt='foto' />
               </Row>
            </Col>
            <Col >
               <Contact /> 
            </Col>
         </Row>
         <SocialLinks/>
      </Container>
   )
}

export default Home
