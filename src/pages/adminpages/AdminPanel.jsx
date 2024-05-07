import { useEffect, useState } from "react"

function AdminPanel() {
  const[user,setuser]=useState([])

  async function getUser() {
      const res=await fetch("https://6639fda71ae792804bed94eb.mockapi.io/user")
      const data=await res.json()
      setuser(data)
  }
  useEffect(()=>{
      getUser()
  },[])

  return (
    <div>
        
    </div>
  )
}

export default AdminPanel