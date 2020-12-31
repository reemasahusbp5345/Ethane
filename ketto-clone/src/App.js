import React from 'react'
import './Components/css/App.css'
import Form from './Components/Form'
import Demo from './Components/Demo'
import Carousel from './Components/Carousel'
import Features from './Components/Features'
import FAQ from './Components/FAQ'
function App() {
  return (
  <div className = "text-center">
  <Form/>
  <Demo/>
  <Carousel/>
  <Features/>
  <FAQ/>
  </div>
  )
}

export default App