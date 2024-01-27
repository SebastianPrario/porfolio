import { greetingText, greetingTitle } from '../../constants';
import { Card , Image, Col, Row } from 'react-bootstrap';
import imagen from '../../assets/foto.jpg'
import { Typewriter } from "react-simple-typewriter";
import styles from './Hello.module.css'

function Hello () {
  
    return (
        <div className={styles.helloDiv}>
        	<div className='mx-3'>
                <h2	className="d-none d-lg-block display-1">
                    <Typewriter words={[greetingTitle]} loop={true} />
                    &nbsp;
				</h2>
                <h2	className="d-block d-lg-none pt-5 mt-4 display-5">
                    <Typewriter words={[greetingTitle]} loop={true} />
					&nbsp;
				</h2>  
                     <Row  className='d-none d-sm-flex pt-2 align-items-start'>
                    <Col xs={7} >
                    <Card.Text className=' d-none d-md-flex mt-4 pt-5 display-6'>
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
             

                </div>
         
          
        </div>
    )
}

export default Hello