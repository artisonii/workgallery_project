import React from 'react'
import Home from '../pages/homepage/Home'
import Template from '../pages/templatepage/Template'


import { Route, Routes } from "react-router-dom"
import Theme from '../pages/themepage/Theme'


Theme
const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/template" element={<Template />} />
                <Route path="/theme" element={<Theme />} />
            </Routes>
        </div>
    )
}

export default Allroutes