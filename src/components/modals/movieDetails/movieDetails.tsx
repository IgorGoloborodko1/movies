import React from 'react'

import styles from './movieDetails.module.css'

interface MovieDetailsProps {
  name: string
  year: number
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ name, year }) => {
  return (
    <article>
      <div className={styles.heading}>
        <h2>netflixroulette</h2>
      </div>
      <div className={styles.mainSection}>
        <img
          className={styles.image}
          src="../../../../assets/parazity.png"
          alt="Movie cover"
        />
        <div>
          <div className={styles.details}>
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.rating}>4.5</span>
          </div>
          <p className={styles.fact}>Oscar winning movie</p>
          <div className={styles.info}>
            <p className={styles.year}>{year}</p>
            <p>154 min</p>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            ipsam, perferendis cum quos exercitationem consectetur repudiandae
            magni ullam nemo hic id quibusdam veniam eos quas natus nam sequi
            asperiores dolorem. Aliquam itaque nam cupiditate error ullam cumque
            perferendis quasi autem eveniet, architecto similique dolorum nisi
            qui doloremque? Accusamus nihil praesentium pariatur, nesciunt quo
            corrupti quia asperiores reprehenderit sint a illo libero,
            temporibus sunt! Facilis nemo et aliquam similique assumenda
            incidunt voluptatum dolorum, eius cum, autem magnam quia molestiae
            nostrum blanditiis porro nobis! Debitis nam sapiente accusamus
            cupiditate! Laborum tenetur nemo, dolorem, ducimus fuga culpa optio
            debitis repudiandae, impedit aliquid accusamus!
          </p>
        </div>
      </div>
    </article>
  )
}
