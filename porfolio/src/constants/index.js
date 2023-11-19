import bon from './../assets/bon.png'
import food from './../assets/fodd.png'
import rick from './../assets/rick.png'
import bootstrapImg from './../assets/icons/bootstrap-icon.png'
import githubImg from './../assets/icons/github-icon.png'
import htmlImg from './../assets/icons/html5-icon.png'
import cssImg from './../assets/icons/css3-icon.png'
import javascriptImg from './../assets/icons/javascript-icon.png'
import reactImg from './../assets/icons/react-icon.png'
import reduxImg from './../assets/icons/redux-icon.png'
import postgreImg from './../assets/icons/postgre-icon.png'
import nodejsImg from './../assets/icons/nodejs-icon.png'
import sequelizeImg from './../assets/icons/sequelize-icon.png'
import expressImg from './../assets/icons/express-icon.png'
import postmanImg from'./../assets/icons/postman-icon.png'



export const greetingTitle = 'Hola! Soy Sebastián';
export const greetingText = 'Bienvenid@ a mi Portfolio! Mi nombre es Sebastián Prario y soy Desarrollador Full Stack. Aqui podrás conocer un poco de mi trabajo . Espero que te guste!!!' 

export const aboutTitle = 'Sobre Mí';

export const aboutOne = `Soy un entusiasta de la tecnología que siempre busca aprender y crear. Desde que tuve mi primera computadora, me fascinó el mundo digital y sus posibilidades. Aunque estudié contabilidad y administración de empresas, nunca dejé de lado mi pasión por la programación. Gracias a internet, pude estudiar desde mi hogar, lo que me permitió formarme como desarrollador web. Ahora, quiero compartir mis conocimientos y habilidades con el mundo. Sé que este es solo el primer paso de un camino lleno de desafíos y oportunidades.`

export const projects = [
    {name:'Bon Appetit' , info:'Trabajo final grupal que permite a los clientes pedir a través de una app comidas en un restaurante.', tecno: 'React , Redux , Express , Sequelize , PostgreSQL , FireBase, MercadoPago , Cloudinary',  img:bon , deploy: '//bonappetite.vercel.app/'},
    {name:'Qué comemos hoy?', info:'Esta aplicación de recetas permite busquedas combinadas y crear recetas nuevas.', tecno:'React , Redux , Express , Sequelize , PostgreSQL , Axios' ,  img: food, deploy:'//pi-food-pi-hazel.vercel.app/'},
    {name:'Rick and Morty' , info: 'Este proyecto toma la información de una api.Tambien permite logearse y guardar en favoritos.' ,tecno:'React , Redux , Axios, CSS' , img: rick, deploy: '//rick-and-morty-ottv-e5cmo13pr-sebastianprario.vercel.app'}
]

export const technicalSkills = [
    {
       id:1,
       skill:'GitHub',
       image: githubImg,
    },{
       id:2,
       skill:'HTML',
       image: htmlImg,
    },{
       id:3,
       skill:'CSS3',
       image: cssImg,
    },{
       id:4,
       skill:'JavaScript',
       image: javascriptImg,
    },{
       id:5,
       skill:'React',
       image: reactImg,
    },{
       id:6,
       skill:'Redux Toolkit',
       image: reduxImg,
    },{
       id:7,
       skill:'Booststrap',
       image: bootstrapImg,
    },{
       id:8,
       skill:'PostgreSQL',
       image: postgreImg,
    },{
       id:9,
       skill:'NodeJS',
       image: nodejsImg,
    },{
       id:10,
       skill:'Sequelize',
       image: sequelizeImg,
    },{
       id:11,
       skill:'Express',
       image: expressImg,
    },{
       id:12,
       skill:'PostMan',
       image: postmanImg,
    }
]