import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'
const Template = () => {
  const { data } = useContext(DataContext)
  const navigate = useNavigate()

  return <div className='homeContainer'>
    <div><h2>Template Page</h2>
      <button onClick={() => navigate("/")}>Go to Home Page </button>
      <button onClick={() => navigate("/Theme")}>Go to Theme Page </button></div>
    <div>
      {data.theme && data.theme.map((e) => {
        return <div key={e.id}>
          <div>
            <img src={e.img} alt="dummy pic" />
          </div>
          <div>
            <h2>{e.name}</h2>
          </div>
        </div>
      })}
    </div>
  </div>
}

export default Template


