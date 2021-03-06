
import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/About/About';
import Contact from './components/contact/Contact';
// import Services from './components/services/Services';
// import Testimonial from './components/testimonial/Testimonial';
import Experience from './components/Experience/Experience';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
const App = () => {
  return (<>
    <Header />
    <Nav />
    <About />

    {/* <Services />
    <Testimonial /> */}
    <Experience />

    <Portfolio />
    <Contact />
    {/* <Footer /> */}
  </>
  )
}
export default App;