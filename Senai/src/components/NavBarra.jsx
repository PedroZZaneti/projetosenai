import styles from '../styles/NavBarra.module.css'

const NavBarra = () => {
  return (
    <div className={styles.NavBarra}>
      <div className={styles.Divisoria}> <img src="https://tecnologiaseducacionais.senai.br/img/senai_color.png" alt="" /> </div>
      <div className={styles.Divisoria}> <button className={styles.button1}>Conheça o SENAI</button> </div>
      <div className={styles.Divisoria}> <button className={styles.button2}>Login</button> </div>
      
    </div>
  )
}

export default NavBarra
