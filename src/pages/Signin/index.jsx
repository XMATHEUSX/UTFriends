import { AiFillCloseSquare } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './signin.css'

export default function Signin() {

  return (
    <div className="conteinerSignin">

      <div className="signinBoxSignin">

        <div className="signinContentSignin">
      
          <div className="contentSignin">
          
            <p> Insira seu email institucional </p>

            <div className="emailBoxSignin">

              <input
                title="Email"
                name="Email"
                type="email"
                autoComplete="off"
              />
               
            </div>
          </div>

          <div className="contentSignin">
          
            <p> Informe a sua senha </p>

            <div className="passwordBoxSignin">

              <input
                title="Email"
                name="Email"
                type="password"
                autoComplete="off"
              />

            </div>
          </div>
        </div>

        <div className="bottomContentSignin">
          
          <Link onClick to="/feed">

            <FiArrowRight title="arrow" className="arrowIconSignin" size={45} />

          </Link>
        
        </div>
      </div>

      <div className="titleBoxSignin">

        <div className="titleBarSignin">
          
          <p> Welcome_User </p>

          <Link to="/">

            <AiFillCloseSquare title="close" className="closeIconSignin" size={30} />

          </Link>
            
        </div>

        <div className="titleContentSignin">
          
          <h1> Loading... </h1>

          <div className="titleProgressBarSignin">
          
            <div className="progressBarSignin"/>

          </div>
        </div>
      </div>
    </div>
  );
}