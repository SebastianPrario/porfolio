import React from 'react';
import { projects } from '../../constants';
import ProjectsCard from '../ProjectsCards/ProjectsCard'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Projects.module.css'



function Projects () { 
   return (
      <div  className={styles.madera}> 
         <h1 className="pt-4 pb-md-5 col-12">Mis Proyectos</h1> 
         <Carousel  indicators={false} data-bs-theme="dark" >
            {projects.map(p => (
            <Carousel.Item key={p.name}> 
            <ProjectsCard
            name={p.name}
            info={p.info}
            tecno={p.tecno}
            deploy={p.deploy}
            img={p.img}
             />
            </Carousel.Item>
            ))}
        </Carousel>
      </div>
   )
 }
 
 export default Projects