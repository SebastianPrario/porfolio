
import {  aboutOne } from '../../constants';
import styles from './About.module.css'


export function About () {
  return (
    <div className={styles.divAbout} >
      <div className="col-8 mx-auto">
        <div className=' display-5  col-12  mx-auto'>Sobre Mí
        </div>
        <div className='d-none d-md-flex fs-3 mt-4 col-12 mx-auto'>
          {aboutOne}
        </div>
        <div className='d-flex d-md-none fs-6 mt-4 col-12 mx-auto'>
          {aboutOne}
        </div>
        </div>
      </div>
   
  )
}

export default About