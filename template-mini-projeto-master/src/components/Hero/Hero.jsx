import { useState } from "react";
import styles from "./Hero.module.css";


export default function Hero() {
  const [mostrarEmail, setMostrarEmail] = useState(false);

  function mostrarOuEsconderEmail() {
    setMostrarEmail(!mostrarEmail);
  }

  return (
    <section className={styles.hero}>
     
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Olá, eu sou</h2>
        <h1 className={styles.title}>Luana Rodrigues</h1>
        <p className={styles.role}>Frontend Developer</p>

        <p className={styles.description}>
          Apaixonada por design e desenvolvimento web. 
          Transformo ideias em experiências digitais modernas e acessíveis.
        </p>

       
        <div className={styles.buttons}>
          <button 
            onClick={mostrarOuEsconderEmail} 
            className={styles.primaryBtn}
          >
            {mostrarEmail ? "Esconder email" : "Fale comigo"}
          </button>

          <a href="#projetos" className={styles.secondaryBtn}>
            Meus Projetos
          </a>
        </div>

       
        {mostrarEmail && (
          <p className={styles.emailText}>
            📩 Email: luanarafaela1001@gmail.com
          </p>
        )}
      </div>

      
      <div className={styles.imageWrapper}>
        {/* <img 
          src={minhaFoto} 
          alt="Foto de Luana Rodrigues" 
          className={styles.image} 
        /> */}
      </div>
    </section>
  );
}