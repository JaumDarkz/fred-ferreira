import React, { useEffect } from 'react'
import styles from './styles.module.scss'

const CTA = () => {
  const links = [
    'https://wa.me/5531993143724?text=Ola%2C+vi+o+video+no+tiktok+e+quero+entender+melhor',
    'https://wa.me/5531993144678?text=Ola%2C+vi+o+video+no+tiktok+e+quero+entender+melhor',
    'https://wa.me/5531993144853?text=Ola%2C+vi+o+video+no+tiktok+e+quero+entender+melhor',
    'https://wa.me/5531993145010?text=Ola%2C+vi+o+video+no+tiktok+e+quero+entender+melhor',
    'https://wa.me/5531993145063?text=Ola%2C+vi+o+video+no+tiktok+e+quero+entender+melhor'
  ]

  const openRandomLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length)
    const randomLink = links[randomIndex]
    window.open(randomLink, '_blank')
  }

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

        <div className={styles.button} onClick={openRandomLink}>
          Entrar em Contato
        </div>
      </div>
    </>
  )
}

export default CTA
