import { Card , ListGroup} from "react-bootstrap"



function SocialLinks () {
   return (
      <Card className='border-primarymb-4'>
         <Card.Body>
            <ListGroup   className="list-group-flush justify-content-center">
               <ListGroup.Item>
                  <Card.Link href='https://www.linkedin.com/in/sebastianprario/'>
                  <BsLinkedin size={50}color='#090909'/>
                  </Card.Link>
               </ListGroup.Item>
               <ListGroup.Item>
                  <Card.Link href='https://github.com/Sebastianprario/'>
                  <FaGithub size={50}color='#110d01'/>
                  </Card.Link>
               </ListGroup.Item>
               <ListGroup.Item> 
               <div className="row justify-content-center">   
               <div className="col-4 text-end">
               <MdOutlineAlternateEmail size={40} color='#171010'/>
               </div>
               <div className="d-none d-md-flex fs-2 text-start col-8">
                  Sebastianprario@hotmail.com
               </div>
               <div className="d-flex d-md-none fs-4 text-start col-8">
                  Sebastianprario@hotmail.com
               </div>
               </div>
               
               </ListGroup.Item>             
            </ListGroup>
         </Card.Body>
      </Card>
   )
}

export default SocialLinks
      

