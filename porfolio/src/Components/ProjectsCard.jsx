import { Card } from 'react-bootstrap';

function ProjectsCard({ name , info, tecno , deploy , img }) {

    return (
        <div >
        <Card  className='my-5 pb-4' style={{height:"500px"}} >
           <div className='row align-items-center py-4'>
            <div className='col-6'>
             <Card.Img className='d-flex d-md-none'src={img} height={150}/>
             <Card.Img className='d-none d-md-flex'src={img} height={400}/>
            </div>
            <div className='col-6'>
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{info}</p>
                <p className="card-text d-none d-md-block">Tecnologías</p>
                <p className="card-text">{tecno}</p>
                <p className="card-text d-none d-md-block">Deploy</p>
                <Card.Link href={deploy}>{deploy}</Card.Link>
            </div>
           
          </div>
        </Card>
        </div>
    )
}

export default ProjectsCard
