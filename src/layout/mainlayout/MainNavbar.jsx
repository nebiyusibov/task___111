import React from 'react'
import { Link } from 'react-router-dom'
import"./MainNavbar.scss"

function MainNavbar() {
  return (
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>-------
        <li><Link to={"Basket"}>Basket</Link></li>
      </ul>
    </div>
  )
}

export default MainNavbar