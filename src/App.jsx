import Home from "./Components/Pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMovie from './Components/Pages/AboutMovie'
import Gallery from './Components/Pages/GalleryPG'
import AboutAuthor from './Components/Pages/AboutAuthor'

function App() {


  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutTheMovie" element={<AboutMovie/>} />
      <Route path = '/gallery' element ={<Gallery/>} />
      <Route path = '/aboutTheAuthor' element ={<AboutAuthor/>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
