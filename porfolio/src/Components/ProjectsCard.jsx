import { Card } from 'react-bootstrap';

function ProjectsCard({ name , info, tecno , deploy , img }) {

    return (
        <div >
        <div  className='projectCard'  >
           <div className='row align-items-center '>
            <div className='d-none d-md-flex '>
                <div className='col-5'>
                <Card.Img className='d-none d-md-flex'src={img} height={450}/>
                </div>
                <div className='col-6 py-3 my-3'>
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{info}</p>
                <p className="card-text ">Tecnologías</p>
                <p className="card-text">{tecno}</p>
                <p className="card-text d-none d-md-block">Deploy</p>
                <Card.Link href={deploy}>{deploy}</Card.Link>
                </div>
            </div>
            <div className='b-flex d-md-none col-12'>
                <div className='row justify-content-center '>
                 
                <img className='col-6'src={img} width={30} height={30}/>
                </div>
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{info}</p>
                <p className="card-text">Deploy</p>
                <Card.Link href={deploy}>{deploy}</Card.Link>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ProjectsCard
