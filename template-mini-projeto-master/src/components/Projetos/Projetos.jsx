 import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.title}>✨ Meus Projetos</h2>
      <p className={styles.subtitle}>
        Aqui estão alguns trabalhos que desenvolvi com muito carinho.
      </p>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Projeto 1</h3>
          <p className={styles.cardDesc}>
            Um site responsivo desenvolvido com HTML, CSS e JavaScript.
          </p>
          <a href="https://github.com/Luana13-bit/Projeto-M1-1" className={styles.cardBtn}>Ver Projeto</a>
        </div>

       
      </div>
    </section>
  );
}
