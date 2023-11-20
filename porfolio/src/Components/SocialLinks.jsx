import { Card , ListGroup} from "react-bootstrap"
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";



function SocialLinks () {
   return (
      <div>
         <div className="border-black">
            <ListGroup  >
               <div className="py-4">
                  <Card.Link href='https://www.linkedin.com/in/sebastianprario/'>
                  <BsLinkedin size={50}color='#090909'/>
                  </Card.Link>
               </div>
               <div>
                  <Card.Link href='https://github.com/Sebastianprario/'>
                  <BsGithub size={50}color='#110d01'/>
                  </Card.Link>
               </div>
               <div> 
               <div className="row justify-content-center">   
               <div className="col-4 text-end">
               <zoom size={40} color='#171010'/>
               </div>
               <div className="d-none d-md-flex fs-2 text-start col-8">
                  <b>Sebastianprario@hotmail.com</b>
               </div>
               <div className="d-flex d-md-none fs-3 text-start col-9">
                 Sebastianprario@hotmail.com 
               </div>
               </div>
               </div>             
            </ListGroup>
         </div>
      </div>

   )
}

export default SocialLinks
      

