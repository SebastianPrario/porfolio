import { greetingText, greetingTitle } from '../constants';
import { Card , Image, Col, Row } from 'react-bootstrap';
import imagen from './../assets/foto.jpg'

function Hello () {
    return (
        <div  className=' vh-100 justify-content-center div-stack'>
            <div className='col-12  '>
            <Card className="my-2">
                <Card.Body>
                    <Card.Title className='d-none d-md-block display-1'>{greetingTitle}</Card.Title>
                    <Card.Title className='d-block my-2 d-md-none display-6'>{greetingTitle}</Card.Title>
                    <Row className='align-items-center'>
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
                    </Row>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Hello