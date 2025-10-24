import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Button, Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import Pdf from './../../assets/CV.pdf'
import styles from './Navs.module.css';

function Navs () {
    const [expanded, setExpanded] = useState(false);
   

    const onResumeClick = () => {
        window.open(Pdf);
    };

    return (
        <Navbar expanded={expanded} expand="md" className={`${styles.neonNav} fixed-top`}>
            <Navbar.Toggle 
                aria-controls="responsive-navbar-nav" 
                onClick={() => setExpanded(expanded ? false : "expanded")}
                className='btn btn-secondary'
            />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center w-100">
                    <Nav.Item >
                        <Nav.Link className={styles.neonLink}>
                          <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={100} 
                              className={styles.neonText}>Inicio</ScrollLink>
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link className={styles.neonLink}>
                           <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={100} 
                              className={styles.neonText}>Sobre Mí</ScrollLink>
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link className={styles.neonLink}>
                            <ScrollLink to="stack" spy={true} smooth={true} offset={-50} duration={100} 
                                className={styles.neonText}>Tecnologías</ScrollLink>
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link className={styles.neonLink}>
                           <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={100} 
                                className={styles.neonText}>Proyectos</ScrollLink>
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link className={styles.neonLink}>
                           <ScrollLink to="contact" spy={true} smooth={true} offset={-40} duration={100} 
                                className={styles.neonText}>Contactame</ScrollLink>
                        </Nav.Link>
                     </Nav.Item>
                     <Button 
                        onClick={onResumeClick}
                        className={`${styles.neonButton} ms-md-4 mt-3 mt-md-0`}>
                        Mi CV
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navs
