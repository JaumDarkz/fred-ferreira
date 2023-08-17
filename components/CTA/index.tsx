import React, { useEffect } from 'react'
import styles from './styles.module.scss'

const CTA = () => {
  const links = [
    'https://api.whatsapp.com/send?phone=5531993144570&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145153&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145477&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145548&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145709&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta'
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
          Compre seus números e faça sua fézinha clicando no <br /> <span>BOTÃO ABAIXO</span>
        </div>

        <div className={styles.button} onClick={() => window.open('https://rifa.digital/s/iphone-13-pro-max-lacrado-ou-4k-no-pix-3000-reais-em-bilhetes-premiados54674', '_self')}>
          RESERVAR
        </div>
      </div>
    </>
  )
}

export default CTA
