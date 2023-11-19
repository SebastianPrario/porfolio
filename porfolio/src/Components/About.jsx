import { Card } from "react-bootstrap"
import {  aboutOne } from '../constants';

export function About () {
    return (
        <div className='row bg-primary ' id="sobremi">
            <div className='col-12 p-4'>
            <Card >
                <div className="computadora " >
                <Card.Body className='col-12  my-3'>
                    <Card.Title className='d-none d-md-flex p-0 display-2  col-4 mx-auto mb-5'>Sobre Mí</Card.Title>
                    <Card.Title className='d-block d-md-none display-6  col-4 mx-auto mb-1'>Sobre Mí</Card.Title> 
                    <Card.Text className='d-none d-md-flex fs-3  col-8   mx-auto'>
                    {aboutOne}
                    </Card.Text>
                    <Card.Text className='d-flex d-md-none fs-8 mx-auto my-auto'>
                    {aboutOne}
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
            </div>
        </div>
    )
}

export default About