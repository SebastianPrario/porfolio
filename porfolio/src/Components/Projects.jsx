import React from 'react';
import { Card } from 'react-bootstrap';



function Projects({name , info, tecno , deploy , img }) {
    
    
    return (
        <Card  className='my-5 ' >
           <div className='row align-items-center'>
            <div className='col-4'>
             <Card.Img src={img} height={350}/>
            </div>
            <div className='col-8'>
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{info}</p>
                <p className="card-text">Tecnologías</p>
                <p className="card-text">{tecno}</p>
                <p className="card-text">Deploy</p>
                <Card.Link href={deploy}>{deploy}</Card.Link>
            </div>
           
          </div>
        </Card>
    )
}

export default Projects
