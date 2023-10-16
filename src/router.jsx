import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Feed from './pages/Feed'
import Useful from './pages/Useful';

export default function RouterApp() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/useful" element={<Useful/>}/>
      </Routes>
    </BrowserRouter>

  )
}