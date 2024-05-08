import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Clients from './Components/Clients/Clients'
import Manage from './Components/Manage'
import Spending from './Components/Spending'
import Local from './Components/Local'
import Footer from './Components/Footer'
import Tesla from './Components/Tesla'
import Design from './Components/Design'
import Market from './Components/Market'

const App = () => {
 
  return (
    <>
    <Navbar />
    <Hero /> 
    <Clients />
    <Manage />
    <Spending />
    <Local />
    <Design />
    <Tesla />
    <Market /> 
    <Footer />
    </>
  )
}

export default App
