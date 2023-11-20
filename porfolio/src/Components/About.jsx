import { Card } from "react-bootstrap"
import {  aboutOne } from '../constants';

export function About () {
    return (
        <div className='row bg-primary ' id="sobremi">
            <div className='col-12 p-md-4'>
            <Card >
                <div className="computadora " >
                <Card.Body className='mx-auto col-12 col-xl-8'>
                    <Card.Title className='d-none d-md-flex p-0 display-6  col-4 mx-auto mt-3'>Sobre Mí</Card.Title>
                    <Card.Title className='d-block d-md-none display-8  col-6 mx-auto mb-1'>Sobre Mí</Card.Title> 
                    <Card.Text className='d-none d-md-flex fs-3  col-10   mx-auto'>
                    {aboutOne}
                    </Card.Text>
                    <Card.Text className='d-flex d-md-none  pt-0 mt-0'>
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