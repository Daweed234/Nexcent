import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Clients from './Components/Clients'
import Manage from './Components/Manage'
import Spending from './Components/Spending'
import Local from './Components/Local'
import Footer from './Components/Footer'

const App = () => {
 
  return (
    <>
    <Navbar />
    <Hero /> 
    <Clients />
    <Manage />
    <Spending />
    <Local />
    <Footer />
    </>
  )
}

export default App
