import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"
export default function HotAccessoriesMenu() {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className='HotAccessoriesLink' to="/music">Music Store</Link>
      <Link className='HotAccessoriesLink' to="/smartDevices">Smart Devices</Link>
      <Link className='HotAccessoriesLink' to="/home">Home</Link>
    <Link className='HotAccessoriesLink' to="/lifestyle">lifestyle</Link>
      <Link className='HotAccessoriesLink' to="/mobilesAccessories">Mobile Accessories</Link>
    </div>
  )
}
