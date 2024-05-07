import { useContext } from "react"
import { MainContext } from "../../context/MainProvaider"

function Basket() {
  const {basket}=useContext(MainContext)

  return (
    <div>
      {basket.map((x)=>(
         <div className='Card'>
         <img src={x.image} alt="" />
         <h3>name:{x.name}</h3>
         <h3>surname:{x.surname}</h3>
         <h3>job:{x.job}</h3>
     </div>
      ))}
    </div>
  )
}

export default Basket