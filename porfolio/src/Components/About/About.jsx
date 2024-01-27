
import {  aboutOne } from '../../constants';
import styles from './About.module.css'


export function About () {
  return (
    <div className={styles.divAbout} >
      <div className="col-12 px-4 ms-0 ms-md-4 me-5 col-md-12">
        <div className='d-none d-md-flex display-5  col-4  mx-auto'>Sobre Mí
        </div>
        <div className='d-block d-md-none display-5 pt-4  mb-4'>Sobre Mí
        </div> 
        <div className='d-none d-md-flex fs-3 mt-4 col-10 mx-auto'>
          {aboutOne}
        </div>
        <div className='d-flex d-md-none col-10 ms-5'>
          {aboutOne}
        </div>
      </div>
    </div>
  )
}

export default About