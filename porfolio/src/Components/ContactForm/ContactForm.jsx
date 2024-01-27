import emailjs from "@emailjs/browser";
import {  useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const ContactForm = () => {
	
	const [mensaje, setMensaje] = useState(
		{ last_name :'', first_name: "", message : "" , email: ""}
	);

	const handleChange = (e) => setMensaje({
		...mensaje,
		[e.target.name]: e.target.value,
	});

	
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs
		.send("service_b6jzie8", "template_wa35owp", {
			last_name: mensaje.last_name,
			first_name: mensaje.first_name,
			message: mensaje.message,
			email: mensaje.email
		}
		,"ukoeLgVK7aeMbSAeg" )
			.then(() =>  alert("Gracias por contactarme !"))
			.catch((error) => 	alert (error));
		e.target.reset()			
				};

	return (
		<div className="mx-auto col-8"
			style={{
				backgroundImage:
				"url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
				boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
			}}
		>
			<div>
				<h2
					style={{ fontFamily: "Morganite Bold, sans-serif"  }}
					>
					<b><Typewriter words={["Contactame!!"]} loop={true} /></b>
					&nbsp;
				</h2>
			</div>
			<div className="w-full flex justify-center">
			<Form
			onSubmit={sendEmail}>
				<Form.Group className="col-6 fs-4 mx-auto mb-3" controlId="firstname" name="from_name">
					<Form.Label>Nombre</Form.Label>
					<Form.Control 
					type="text" 
					name="first_name"
					onChange={handleChange}/>
				</Form.Group>
				<Form.Group className="col-6 mx-auto fs-4 mb-3" controlId="lastname" name="lastname">
					<Form.Label>Apellido</Form.Label>
					<Form.Control 
					type="text"
					name="last_name"
					onChange={handleChange}/>
				</Form.Group>
				<Form.Group className="mb-3 mx-auto fs-4 col-8" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control 
					type="email"
					name="email"
					onChange={handleChange} />
				</Form.Group>

				
				<Form.Group className="pb-3 col-10 mx-auto fs-4" controlId="message" name="message">
					<Form.Label>Mensaje</Form.Label>
					<Form.Control 
					name="message"
					onChange={handleChange}
					as="textarea" rows={3} />
				</Form.Group>
				<Button
				type="submit"
				className="mb-2 bg-secondary"
				>enviar</Button>
			</Form>
			</div>
		</div>
	);
};

export default ContactForm;
