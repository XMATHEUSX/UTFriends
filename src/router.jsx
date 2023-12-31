import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Feed from './pages/Feed'
import EmailValidation from './pages/Useful/EmailValidation';
import NewPassword from './pages/Useful/NewPassword'
import EmailConfirmed from './pages/Useful/EmailConfirmed';

export default function RouterApp() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/emailvalidation" element={<EmailValidation/>}/>
        <Route path="/newpassword" element={<NewPassword/>}/>
        <Route path="/emailconfirmed" element={<EmailConfirmed/>}/>
      </Routes>
    </BrowserRouter>

  )
}