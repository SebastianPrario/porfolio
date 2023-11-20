import { greetingText, greetingTitle } from '../constants';
import { Card , Image, Col, Row } from 'react-bootstrap';
import imagen from './../assets/foto.jpg'
import { Typewriter } from "react-simple-typewriter";

function Hello () {
    return (
        <div  className='justify-content-center'>
            <div className='col-12'>
            <div className="hellofondo">
            <div>
				
			</div>
                <Card.Body>
                   
                <h2
					style={{ fontFamily: "Morganite Bold, sans-serif" }}
					className="d-none d-lg-block display-1"
				>	<Typewriter words={[greetingTitle]} loop={true} />
					&nbsp;
				</h2>
                <h2
					style={{ fontFamily: "Morganite Bold, sans-serif" }}
					className="d-block d-lg-none pt-5 mt-4 display-3   "
				>	<Typewriter words={[greetingTitle]} loop={true} />
					&nbsp;
				</h2>  
                                    
                    
                    <Row  className='d-none d-sm-flex align-items-center'>
                    <Col xs={7} >
                    <Card.Text className=' d-none d-md-flex pt-2 display-4'>
                        {greetingText}
                    </Card.Text>
                    <Card.Text className='my-3 d-flex d-md-none display-6'>
                        {greetingText}
                    </Card.Text>
                     </Col>
                     <Col xs={5}>
                    <Image src={imagen} rounded thumbnail fluid />
                   </Col>
                   
                    </Row >
                    <Row  className='d-flex d-sm-none align-items-center'>
                    <Col xs={7} >
                    <Card.Text className=' d-none d-md-flex pt-2 display-4'>
                        {greetingText}
                    </Card.Text>
                    <Card.Text className='my-3 d-flex d-md-none display-8'>
                        {greetingText}
                    </Card.Text>
                     </Col>
                     <Col xs={5}>
                    <Image src={imagen} rounded thumbnail fluid />
                   </Col>
                    </Row >
             

                </Card.Body>
            </div>
            </div>
        </div>
    )
}

export default Hello