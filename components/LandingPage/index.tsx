import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lightEffect} />

      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div className={styles.contentContainer}>
            <div className={styles.title}>
              Coloque o seu <span>nome</span> e clique no <span>BOTÃO ABAIXO</span> para falar comigo:
            </div>

            <div className={styles.list}>
              <div className={styles.item}>
                ✔️ Plataforma com as melhores informações
              </div>

              <div className={styles.item}>
                ✔️ Suporte exclusivo
              </div>

              <div className={styles.item}>
                ✔️ Atualizações Diárias
              </div>

              <div className={styles.item}>
                ✔️ Ligações ao vivo comigo
              </div>
            </div>

            <div className={styles.inputContainer}>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.buttonContainer} onClick={() => window.open('/obrigado', '_self')}>
              Enviar
            </div>
          </div>
        </div>

        <div className={styles.rightSide} />
      </div>
    </div>
  )
}

export default LandingPage