import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvaider'

function Home() {
    const {addBasket}=useContext(MainContext)

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
    <div className='container'>
        {user.map((x)=>(
            <div className='Card'>
                <img src={x.image} alt="" />
                <h3>name:{x.name}</h3>
                <h3>surname:{x.surname}</h3>
                <h3>job:{x.job}</h3>
                <Link to={`Detail/${x.id}`}>Add Detail</Link>
                <button onClick={()=>addBasket(x)}>Basket</button>
            </div>
        ))}
    </div>
  )
}

export default Home