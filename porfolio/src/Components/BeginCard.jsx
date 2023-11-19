import { greetingText, greetingTitle } from '../constants';
import  Card  from 'react-bootstrap/Card';

export function BeginCard () {
    return(
        <div  id="home" className=' vh-100 mt-4 justify-content-center '>
            <div className='col-12  '>
            <Card className="border-0 my-2">
                <Card.Body>
                    <Card.Title className='d-none d-md-block display-1'>{greetingTitle}</Card.Title>
                    <Card.Title className='d-block my-1 d-md-none display-6'>{greetingTitle}</Card.Title>
                    <Card.Text className='mb-3 d-none d-md-flex pt-5
                    display-3'>
                        {greetingText}
                    </Card.Text>
                    <Card.Text className='my-3 d-block d-md-none
                    display-6'>
                        {greetingText}
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}