import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
const Theme = () => {
    const { data } = useContext(DataContext)
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
        <div><h2>Theme Page</h2>
            <button onClick={() => navigate("/")}>Go to Home Page </button>
            <button onClick={() => navigate("/template")} style={{ backgroundColor: "lightBlue" }}>Go to Template Page </button></div>
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

export default Theme