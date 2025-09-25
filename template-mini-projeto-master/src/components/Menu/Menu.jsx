import styles from './Menu.module.css';

export default function Menu(){
  return(
    <header className={styles.containerMenu}>
    
      <ul className={styles.menu}>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Meus projetos</a>
        </nav>
      </ul>
    </header>
  )
}