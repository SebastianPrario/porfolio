import React from 'react';
import { projects } from '../../constants';
import ProjectsCard from '../ProjectsCards/ProjectsCard'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Projects.module.css'
import { useLocation } from 'react-router-dom';


function Projects () { 
   const location = useLocation()
   return (
   <div className={location ==="/" ? 'row justify-content-center mt-4 ':'row vh-100 justify-content-center mt-4 mx-5 ' } > 
    <div className='col'>
      <h1 className="py-4 col-12">Mis Proyectos</h1> 
         <div className={styles.madera}>
            <div className={styles.carousel}>
               <Carousel variant="dark" >
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