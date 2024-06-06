import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"

function App() {


  return (
    
    <div>
      <Header />
      <div className="pl-20 pr-20 ">
      <Home />
      </div>
      <Outlet />
    </div>
    
  )
}

export default App
