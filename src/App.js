import React from 'react'
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import { BrowserRouter as Router} from 'react-router-dom'
import data from "./data/data.json"
import Offers from './components/Offers'
export default function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer} />
    </Router>
  )
}
