import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
        <ul>
            <li>
                <Link to={"/AdminPanel"}>AdminHome</Link> 
            </li>
            -----
            <li>
            <Link to={"Add"}>Add</Link>

            </li>
        </ul>
    </div>
  )
}

export default AdminNavbar