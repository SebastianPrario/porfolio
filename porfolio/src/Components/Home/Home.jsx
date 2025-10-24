import { Container, Image , Col, Row} from 'react-bootstrap';
import Contact from '../Contact/Contact'
import Navs  from "../Nav/Navs";
import About from "../About/About";
import Stack from "../Stack/Stack";
import Projects from "../Projects/Projects";
import Hello from "../Hello/Hello"
import SocialLinks from '../SocialLink/SocialLinks';
import cartel from '../../assets/apple.jpg'
import river from '../../assets/river.jpg'
import cartel2 from '../../assets/cartel2.png'
import talent from '../../assets/talent.png'
import soda from '../../assets/soda.jpg'
import bici from '../../assets/bici.png';


function Home() {
   return (
      <Container id='home' className='pt-3'>
         <Hello/>
         <Navs/>
         {/* componente about */}
         <Row>  
            <Col className='d-none d-md-flex col-lg-2'>
               <Row className=' d-none d-lg-flex py-4 my-4 align-content-start'>
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
         <Stack/> 
         <Row className='d-none d-lg-flex my-5'>
            <Col className='col-4 '>
               <Image  roundedCircle className="mx-auto my-2 "style={{height:"200px", width:"220px"}}
               src={cartel} alt='foto' />
            </Col>
            <Col className='col-4 '> 
               <Image style={{height:"220px", width:"200px"}}
               src={talent} alt='foto' />
            </Col>
            <Col className='col-4 '>     
                  <Image  roundedCircle className="mx-auto "style={{height:"240px", width:"280px"}}
                  src={river} alt='foto' />
            </Col>
           </Row> 
           <Projects/>
         {/* componente Contact */}  
         <Row>
            <Col >
               <Contact /> 
            </Col>
         </Row>
         <SocialLinks/>
      </Container>
   )
}

export default Home
