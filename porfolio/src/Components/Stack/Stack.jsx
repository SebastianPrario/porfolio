import { technicalSkills } from '../../constants'
import styles from './Stack.module.css'

function Stack () {

    const half = Math.ceil(technicalSkills.length / 2);
    const firstHalf = technicalSkills.slice(0, half);
    const secondHalf = technicalSkills.slice(half);

   return (
     <div id="stack" className={styles.divStack}>
      <section className={styles.hardSkills__container}>
          <div>
              <h1 className='display-3 mt-0 mb-5 text-bold'>Habilidades Técnicas</h1>

              {/* Fila Superior: Izquierda a Derecha */}
              <div className={styles.marquee}>
                  <div className={styles.track}>
                      {[...firstHalf, ...firstHalf].map((item, index) => (
                          <div className={styles.hardSkills__itemcontainer} key={`top-${index}`}>
                              <img className={styles.hardSkills__itemimage} src={item.image} alt={item.skill} />
                              <h2 className={styles.hardSkills__itemtitle}>{item.skill}</h2>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Fila Inferior: Derecha a Izquierda */}
              <div className={styles.marquee}>
                  <div className={`${styles.track} ${styles.trackReverse}`}>
                      {[...secondHalf, ...secondHalf].map((item, index) => (
                          <div className={styles.hardSkills__itemcontainer} key={`bottom-${index}`}>
                              <img className={styles.hardSkills__itemimage} src={item.image} alt={item.skill} />
                              <h2 className={styles.hardSkills__itemtitle}>{item.skill}</h2>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
     </div>
    )
}
export default Stack