import { greetingText, greetingTitle } from '../constants';
import { Card , Image, Col, Row } from 'react-bootstrap';
import imagen from './../assets/foto.jpg'

function Hello () {
    return (
        <div  className='justify-content-center'>
            <div className='col-12'>
            <div className="hellofondo">
                <Card.Body>
                    <Card.Title className='d-none d-md-block display-1'>{greetingTitle}</Card.Title>
                    <Card.Title className='d-none d-sm-block d-md-none mt-4 display-6'>{greetingTitle}</Card.Title>
                    <Card.Title className='d-block d-sm-none display-10 pt-5 mt-5'>{greetingTitle}</Card.Title>
                    
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