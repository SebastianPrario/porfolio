import { technicalSkills } from '../../constants'
import styles from './Stack.module.css'

function Stack () {
   
   return (
     <div id="stack" className={styles.divStack}>
      <section id='hardSkills' className={styles.hardSkills__container}>
          <div className={styles.hardSkills__containerdata}>
              <h1 className='display-1 mt-0 mb-5 text-bold'>Habilidades Técnicas</h1>
              <div className={styles.hardSkills__dashboard}>
                  {technicalSkills.map((item, index)=>{
                      return(
                          <div className={styles.hardSkills__itemcontainer} key={index}>
                              <img className={styles.hardSkills__itemimage} src={item.image} alt="skill type" />
                              <h2 className={styles.hardSkills__itemtitle}>{item.skill}</h2>
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