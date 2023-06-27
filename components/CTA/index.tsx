import styles from './styles.module.scss'

const CTA = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.lightEffect} />

        <div className={styles.gridContainer}>
          <div className={styles.leftSide} />
          <div className={styles.rightSide} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.title}>
          Entre em contato clicando no <br /> <span>BOTÃO ABAIXO</span>
        </div>

        <div className={styles.button}>
          Entrar em Contato
        </div>
      </div>
    </>
  )
}

export default CTA