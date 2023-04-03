import React from 'react'
import Info from './info/Info';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            Anasayfa asşlmcalsc
            <NavLink to='/Info' >İletişim</NavLink>
            <Routes>
                <Route path="/Info" element={<Info />} />
            </Routes>
        </div>
    )
}

export default Home
