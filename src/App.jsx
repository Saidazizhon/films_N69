
import './App.css'
import Navbar from './components/Navbar'
import NavbarFilms from './components/NavbarFilms'
// import NavbarFilms from './components/NavbarFilms'
import CustomRoutes from './routes'

function App() {

  return (
    <>
      {/* <NavbarFilms/> */}
      <Navbar/>
      <CustomRoutes/>
    </>
  )
}

export default App
