import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  let { id } = useParams();
  const [detail, setdetail] = useState([])

  async function getDetail() {
    const res = await fetch("https://6639fda71ae792804bed94eb.mockapi.io/user/"+id)
    const data = await res.json()
    setdetail(data)
  }
  useEffect(() => {
    getDetail()
  }, [])
  return (
    <div className='container'>
        <div className='Card'>
          <img src={detail.image} alt="" />
          <h3>name:{detail.name}</h3>
          <h3>surname:{detail.surname}</h3>
          <h3>job:{detail.job}</h3>
        </div>
    </div>
  )
}

export default Detail