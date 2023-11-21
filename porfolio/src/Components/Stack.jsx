import { technicalSkills } from '../constants'

function Stack () {
   
   return (
     <div className='div-stack'>
      <section id='hardSkills' className='hardSkills__container'>
          <div className='hardSkills__container-data'>
              <h1 className='display-1 mt-0 mb-5 text-bold'>Habilidades Técnicas</h1>
              <div className='hardSkills__dashboard'>
                  {technicalSkills.map((item, index)=>{
                      return(
                          <div className='hardSkills__item-container' key={index}>
                              <img className='hardSkills__item-image' src={item.image} alt="skill type" />
                              <h2 className='hardSkills__item-title'>{item.skill}</h2>
                          </div>
                      )
                  })}
              </div>
          </div>
      </section>
      </div>
    )
}
export default Stack