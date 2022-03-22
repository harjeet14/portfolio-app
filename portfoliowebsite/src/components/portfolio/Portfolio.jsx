import React from 'react'
import './portfolio.css'
// import Leptop from '../../assets/leptop.png'
import Ec from '../../assets/ec.png'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Healthy Eats</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Healthy Eats</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Healthy Eats</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Healthy Eats</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Healthy Eats</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Healthy Eats</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com' className='btn'>Github</a>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio