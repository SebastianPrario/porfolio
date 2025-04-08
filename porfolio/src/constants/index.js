import bon from './../assets/bon.png'
import food from './../assets/fodd.png'
import bootstrapImg from './../assets/icons/bootstrap.icon.png'
import githubImg from './../assets/icons/github-icon.png'
import htmlImg from './../assets/icons/html5-icon.png'
import cssImg from './../assets/icons/css3-icon.png'
import javascriptImg from './../assets/icons/javascript-icon.png'
import reactImg from './../assets/icons/react-icon.png'
import reduxImg from './../assets/icons/redux.icon.png'
import postgreImg from './../assets/icons/postgre-icon.png'
import nodejsImg from './../assets/icons/nodejs.icon.png'
import sequelizeImg from './../assets/icons/sequelize-icon.png'
import expressImg from './../assets/icons/express-icon.png'
import postmanImg from'./../assets/icons/postman-icon.png'
import memo from '../assets/memo.jpg'
import rick from '../assets/RickandMorty.jpeg'
import lasnoticias from '../assets/lasnoticiasya.jpeg'
import graphQL from '../assets/icons/graphQL.png'
import docker from '../assets/icons/docker.png'
import gcheq from '../assets/gcheq1.jpg'
export const greetingText = 'Bienvenid@ a mi Porfolio! Mi nombre es Sebastián y soy Desarrollador Full Stack. Aqui podrás conocerme un poco + ' 
export const greetingTitle = 'Hola Soy Sebastián!!'
export const aboutTitle = 'Sobre Mí';

export const aboutOne = `Soy un entusiasta de la tecnología que siempre busca aprender y crear. Desde que tuve mi primera computadora, me fascinó el mundo digital y sus posibilidades. Aunque estudié contabilidad y administración de empresas, nunca dejé de lado mi pasión por la programación. Gracias a internet, pude estudiar desde mi hogar, lo que me permitió formarme como desarrollador web. Ahora, quiero compartir mis conocimientos y habilidades con el mundo. Sé que este es solo el primer paso de un camino lleno de desafíos y oportunidades.`

export const projects = [
    {name:'Bon Appetit' , info:'Trabajo final grupal que permite a los clientes pedir a través de una app comidas en un restaurante.', tecno: 'React , Redux , Express , Sequelize , PostgreSQL , FireBase, MercadoPago , Cloudinary',  img:bon , deploy: '//bonappetite.vercel.app/'},
    {name:'Qué comemos hoy?', info:'Esta aplicación de recetas permite busquedas combinadas y crear recetas nuevas.', tecno:'React , Redux , Express , Sequelize , PostgreSQL , Axios' ,  img: food, deploy:'//pi-food-pi-hazel.vercel.app/'},
    {name:'Memotest' , info: 'Es este juego hay que encontrar las coincidencias.Tiene categorías preestablecidas o puedes crear la tuya.' ,tecno:'React , Cloudinary , Axios, CSS' , img: memo, deploy: '//memotest2024.vercel.app/'},
    {name:'Las Noticias Ya!' , info: 'Esta aplicación surgió con el fin de poder ver en una única página varias noticias de diferentes portales utilizando el servicio de RSS. Consiste en dividir la pantalla en tres partes, en donde cada parte tendrá información diferente.',tecno:'React , Express , Axios, Bootstrap ' , img: lasnoticias, deploy: 'https://lasnoticiasya.vercel.app'},
    {name:'Rick and Morty' , info: 'Esta aplicación utiliza el lenguaje de consulta GraphQL para realizar busquedas en una api y mostrar los personajes de la serie',tecno:'React , GraphQL , Styled Component , Apolo Client ' , img: rick , deploy: 'https://rickandmorty-bysebastian.vercel.app/'},
    {name:'GCheq' , info: 'Esta aplicacion permite el manejo de cheques de terceros, controlando la situación crediticia del emisor.Entre sus caracteristicas: ✅ Registrar y organizar cheques de terceros. ✅ Carga de cheques con control de errores. ✅ Generación de órdenes de pago o salidas de cheques, con impresión en PDF. ✅ Generación de informes con listados de cheques en cartera y cheques por cliente en un periodo de tiempo. ✅ Búsqueda rápida de cheques por su número.',tecno:'React , Nest.js , Bootstrap , PostgreSQL ' , img: gcheq , deploy: 'https://gestioncheques.netlify.app/'},
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
    },
    {
      id:13,
      skill:'GraphQL',
      image: graphQL,
   },
   {
      id:14,
      skill:'Docker',
      image: docker,
   }
]