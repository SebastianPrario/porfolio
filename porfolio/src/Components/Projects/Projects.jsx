import { projects } from '../../constants';
import ProjectsCard from '../ProjectsCards/ProjectsCard'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Projects.module.css'

function Projects () { 
   
    return (
    <div className='row justify-content-center mt-4 ' > 
    <div className='col'>
      <h1 className="py-4 col-12">Mis Proyectos</h1> 
         <div className={styles.madera}>
            <div className={styles.carousel}>
               <Carousel style={{height:750}} variant="dark" className="pt-4" >
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