import UTFriends from '/src/assets/images/UTFriends.png'
import GoogleFonts from 'react-google-fonts'
import { FiPower } from "react-icons/fi"
import { BiArrowToTop } from "react-icons/bi"
import { RxReset } from "react-icons/rx"

import './home.css'

import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div className="conteinerH">

      <GoogleFonts family="Roboto Mono" variant="regular"/>
       
      <div className="contentH">

        <div className="monitorH">

          <div className="screenH">

            <img src={UTFriends} alt="Img" className="imageH"/>

            <div className="screenContentH">

              <Link to={"/signin"} className="fonteH">

              <button> Fazer Login </button>

              </Link>

            </div>

            <div className="screenContentH">

              <Link to={"/signup"} className="fonteH">

              <button className="accountH"> Criar Conta </button>

              </Link>
              
            </div>

          </div>
        </div>

        <div className="necleH"/>

        <div className="cabinetH">

          <div className="firsthContentH">

            <div className="bigDotH">

              <FiPower size={30}/>

            </div>

            <div className="smallDotH">

              <RxReset size={20}/>

            </div>
          </div>

          <div className="secondContentH">

            <div className="squareH"/>

            <div className="inputH">

              <BiArrowToTop size={25} className="inputIconH"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}