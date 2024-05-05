import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Clients from './Components/Clients'
import Manage from './Components/Manage'
import Spending from './Components/Spending'
import Local from './Components/Local'

const App = () => {
 
  return (
    <>
    <Navbar />
    <Hero /> 
    <Clients />
    <Manage />
    <Spending />
    <Local />
    </>
  )
}

export default App
