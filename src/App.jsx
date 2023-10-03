import './App.css'
 import {Routes, Route} from 'react-router-dom'
 import Home from './components/home/Home'
 import About from './components/about/About'
 import Contact from './components/contact/Contact'
 import Footer from './components/common/footer/Footer'
 import Header from './components/common/header/Header'


function App() {
 
  return (
      <div>
        
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      
  )
}

export default App
