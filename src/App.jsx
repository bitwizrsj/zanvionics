import Navbar from "./components/layout/Navbar"
import { Brands } from "./pages/home/Brands"
import AIAutomationLanding from "./pages/home/Hero"
import ServicesSection from "./pages/home/Services"


function App() {

  return (
    <>
      <Navbar />
      <AIAutomationLanding />
      <Brands />
      <ServicesSection />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the AI Automation App</h1>
      </div>
    </>
  )
}

export default App
