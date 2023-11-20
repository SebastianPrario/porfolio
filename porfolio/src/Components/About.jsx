import { Card } from "react-bootstrap"
import {  aboutOne } from '../constants';


export function About () {
    return (
     
            <div className="computadora mx-auto" >
                  <div className="col-12 px-4 col-md-12 pt-4 ">
                    <div className='d-none d-md-flex display-5  col-4 mt-4 pt-4 mx-auto'>Sobre Mí</div>
                    <div className='d-block d-md-none display-5   mb-1'>Sobre Mí</div> 
                    <div className='d-none d-md-flex fs-3 mt-4 col-10   mx-auto'>
                    {aboutOne}
                    </div>
                    <div className='d-flex d-md-none  pt-0 mt-0'>
                    {aboutOne}
                    </div>
                 </div>
                </div>
       
        
    
    )
}

export default About