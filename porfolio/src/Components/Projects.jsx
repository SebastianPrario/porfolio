import { projects } from '../constants';
import ProjectsCard from './ProjectsCard'
import Carousel from 'react-bootstrap/Carousel';

function Projects () { 
   
    return (
    <div className='row mt-4 justify-content-center ' > 
    <div className='col-8  '>
      <h1 className="py-4 pt-4">Mis Proyectos</h1> 
      <div className="fondo mx-3" >
         <div >
            <Carousel  className="  mx-md-5 pb-5 my-0 my-md-auto " >
               {projects.map(p => (
               <Carousel.Item key={p.name}> 
               <ProjectsCard
               name={p.name}
               info={p.info}
               tecno={p.tecno}
               deploy={p.deploy}
               img={p.img}
               text="First slide" />
               </Carousel.Item>
               ))}
            </Carousel>
         </div>
      </div>
      </div>
   </div>
    )
 }
 
 export default Projects