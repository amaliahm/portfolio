import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'
import Developer from './components/Developer'


const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <div className='h-auto w-full flex flex-col justify-content items-center'>
            <About />
          </div>
          <Experience />
          <StarsCanvas />
        </div>
        <Tech />
        <div className='relative z-0 '>
          <Works />
          <Feedbacks />
          <Contact />
          <Developer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
