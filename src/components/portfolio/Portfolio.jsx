import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-commerce Clone',
    github: 'https://github.com/08Janhavi/GitHub-Copilot-Hackathon',
    demo: 'https://e-commerce-shoes-js.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'finTrack',
    github: 'https://github.com/08Janhavi/GitHub-Copilot-Hackathon',
    demo: 'https://08janhavi.github.io/GitHub-Copilot-Hackathon/public/p'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='__blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio