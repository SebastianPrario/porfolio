import React from 'react';
import { Card } from 'react-bootstrap';



function Projects({ name , info, tecno , deploy , img }) {
    
    
    return (
        <Card  className='my-5 pb-4' >
           <div className='row align-items-center py-4'>
            <div className='col-4'>
             <Card.Img className='d-flex d-md-none'src={img} height={150}/>
             <Card.Img className='d-none d-md-flex'src={img} height={300}/>
            </div>
            <div className='col-8'>
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{info}</p>
                <p className="card-text d-none d-md-block">Tecnologías</p>
                <p className="card-text">{tecno}</p>
                <p className="card-text d-none d-md-block">Deploy</p>
                <Card.Link href={deploy}>{deploy}</Card.Link>
            </div>
           
          </div>
        </Card>
    )
}

export default Projects
