
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/shared/navbar/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>} />
      </Routes>
    </BrowserRouter>
      {/* <Layout/> */}
    </>
  )
}

export default App
