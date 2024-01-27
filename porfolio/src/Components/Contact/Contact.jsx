import ContactForm from "../ContactForm/ContactForm";
import { useLocation } from 'react-router-dom';

const Contact = () => {  
const location = useLocation().pathname	

return (
	
			<div>
				{ location=="/contact" ?
				(<div className=" vh-100 pt-5 mx-auto">
					<ContactForm />
				</div>) :
				(<div className=" mx-auto pt-5">
				<ContactForm />
				</div>)}
			</div>
		
	);
};

export default Contact;
