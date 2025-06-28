import React from 'react'
import cloth from "../../assets/cloth.jpg"
import access from "../../assets/access.jpg"
import techgad from "../../assets/techgad.jpg"
const Main2 = () => {
  return (
     <>
      <div className="main2-container">
        <div className="main2-section">
         <h2 className='main2-title'>
          Shop by Category
         </h2>
         <div className="cards-container">
           <div className="card">
            <img src={cloth} alt="" />
            <div className="card-txt"><p>Clothing</p></div>
           </div>
           <div className="card">
            <img src={access} alt="" />
            <div className="card-txt"><p>Accessories</p></div>
           </div>
           <div className="card">
            <img src={techgad} alt="" />
            <div className="card-txt"><p>Gadgets</p></div>
           </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Main2