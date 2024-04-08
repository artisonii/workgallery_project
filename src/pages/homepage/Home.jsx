import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext.jsx'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const { data, setData } = useContext(DataContext)
  const [allRepo, setAllRepo] = useState([])
  const navigate = useNavigate()

  const fetchRepo = async (url) => {
    try {
      const res = await axios.get(url)
      let arr = []
      for (let i = 0; i < res.data.length; i++) {
        arr.push({ name: res.data[i].name, id: res.data[i].id, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyiwwK50nX3EDBw_x2c_zwHVxaKQyRCHZ4q_7yVNeJA&s" })
      }
      setData({ ...data, data: [...arr] })
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    fetchRepo("https://api.github.com/users/artisonii/repos")
  }
  const isDisableThemeButton = (e) => {
    const val = data.theme.filter((ele) => {
      if (e.id === ele.id) {
        return ele
      }
    })
    return val.length > 0 ? true : false
  }
  const handleThemeClick = (e) => {
    if (isDisableThemeButton(e)) {
      const val = data.theme.filter((ele) => {
        if (e.id !== ele.id) {
          return ele
        }
      })
      setData({ ...data, theme: [...val] })
    } else {
      setData({ ...data, theme: [...data.theme, e] })
    }
  }




  return (
    <div className='homeContainer'>
      <div>
        <button onClick={handleClick}>Add Github</button>
        <button disabled={data.theme.length === 0} onClick={() => navigate("/theme")} >Theme Page </button>
        <button disabled={data.theme.length === 0} onClick={() => navigate("/template")} >Template Page </button>
        <h2>Total repos selected - {data.theme.length}</h2>
      </div>
      <div>
        {data.data && data.data.map((e) => {
          return <div key={e.id}>
            <div>
              <img src={e.img} alt="dummy pic" />
            </div>
            <div>
              <h2>{e.name}</h2>
              <div>
                {
                  isDisableThemeButton(e) ? <button onClick={() => handleThemeClick(e)} style={{ backgroundColor: "pink" }}>➖</button> : <button onClick={() => handleThemeClick(e)} style={{ backgroundColor: "lightGreen" }}>➕</button>
                }
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home