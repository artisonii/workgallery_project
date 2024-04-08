import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'
const Template = () => {
  const { data, setData } = useContext(DataContext)
  const navigate = useNavigate()
  const handleClick = (e) => {
    const val = data.theme.filter((ele) => {
      if (e.id !== ele.id) {
        return ele
      }
    })
    setData({ ...data, theme: [...val] })
  }
  return <div className='homeContainer'>
    <div><h2>Template Page</h2>
      <button onClick={() => navigate("/")}>Go to Home Page </button>
      <button onClick={() => navigate("/Theme")} style={{ backgroundColor: "lightGreen" }}>Go to Theme Page </button></div>
    <div>
      {data.theme && data.theme.map((e) => {
        return <div key={e.id}>
          <div>
            <img src={e.img} alt="dummy pic" />
          </div>
          <div>
            <h2>{e.name}</h2>
            <button onClick={() => handleClick(e)} style={{ backgroundColor: "pink" }}>Delete</button>
          </div>
        </div>
      })}
    </div>
  </div>
}

export default Template


