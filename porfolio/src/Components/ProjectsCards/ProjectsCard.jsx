import { Card } from 'react-bootstrap';
import styles from './ProjectsCard.module.css'

function ProjectsCard( { name , info, tecno , deploy , img }) {

    return (
        <div >
            <div  className={styles.projectsCard}  >
                <div className='row px-4 align-items-center'>
                    <div className='d-none d-lg-flex '>
                        <div className='col-5'>
                        <Card.Img className='d-none my-auto d-lg-flex'src={img} height={370}/>
                        </div>
                        <div className='col-6  my-2 ms-4'>
                        <h4 className="card-title my-2">{name}</h4>
                        <p className="card-text px-2">{info}</p>
                        <p className="card-text ">Tecnologías</p>
                        <p className="card-text">{tecno}</p>
                        <p className="card-text d-none d-md-block">Deploy</p>
                        <Card.Link href={deploy}>{deploy}</Card.Link>
                        </div>
                    </div>
                    <div className='b-flex d-lg-none  col-12'>
                        <div className='row  align-items-center justify-content-center  py-5'>
                            <img className='col-6'src={img} height={150}/>
                            <h4 className="card-title mt-4">{name}</h4>
                            <p className="card-text">{info}</p>
                            <p className="card-text ">Deploy</p>
                            <div className='row justify-content-center'>
                                <div className='col-12'>
                                    <a href={deploy}>{deploy}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard
