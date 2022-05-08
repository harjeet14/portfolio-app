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
            <a href='https://github.com/harjeet14/healthy-eats' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Lotide</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com/harjeet14/lotide' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Interview Scheduler</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com/harjeet14/scheduler' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Tiny App</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com/harjeet14/tinyapp' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3>Resource Wall</h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com/harjeet14/Resource_Wall' className='btn'>Github</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Ec} alt="project-image" />
          </div>
          <h3><strong>Jungle</strong></h3>
          <div className='portfolio_item-acc'>
            <a href='https://github.com/harjeet14/jungle' className='btn'>Github</a>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio