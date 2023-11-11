import bon from './../img/bon.png'
import food from './../img/fodd.png'
import rick from './../img/rick.png'

export const greetingTitle = 'Hola! Soy Sebastián';
export const greetingText = 'Hola! Bienvenid@ a mi Portfolio! Mi nombre es Sebastián Prario y soy Desarrollador Full Stack. Aqui podrás conocer un poco de mi trabajo . Espero que te guste!!!' 

export const aboutTitle = 'Sobre Mí';

export const aboutOne = `Soy un entusiasta de la tecnología que siempre busca aprender y crear. Desde que tuve mi primera computadora, me fascinó el mundo digital y sus posibilidades. Aunque estudié contabilidad y administración de empresas, nunca dejé de lado mi pasión por la programación. Gracias a internet, pude estudiar desde mi hogar, lo que me permitió formarme como desarrollador web. Ahora, quiero compartir mis conocimientos y habilidades con el mundo. Sé que este es solo el primer paso de un camino lleno de desafíos y oportunidades.`

export const projects = [
    {name:'Bon Appetit' , info:'Trabajo final grupal que permite a los clientes pedir a través de una app comidas en un restaurante, con la posibilidad de pagar a través de Mercado Pago', tecno: 'React , Redux , Express , Sequelize , PostgreSQL , FireBase, MercadoPago , Cloudinary',  img:bon , deploy: '//bonappetite.vercel.app/'},
    {name:'Qué comemos hoy?', info:'Esta aplicación de recetas permite busquedas combinadas y crear recetas nuevas.', tecno:'React , Redux , Express , Sequelize , PostgreSQL , Axios' ,  img: food, deploy:'//pi-food-pi-hazel.vercel.app/'},
    {name:'Rick and Morty' , info: 'Este proyecto toma la información de una api.Tambien permite logearse y guardar en favoritos.' ,tecno:'React , Redux , Axios, CSS' , img: rick, deploy: '//rick-and-morty-ottv-e5cmo13pr-sebastianprario.vercel.app'}
  ]