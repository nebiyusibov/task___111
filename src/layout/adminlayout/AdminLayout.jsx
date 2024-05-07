import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminLayout() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout