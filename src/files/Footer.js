import './Footer.css'

import I4G from "../images/I4G.png";
import zuriInternship from "../images/Zuri.Internship_Logo.svg";

export default function Footer() {
  return (
    <footer id='footer'>
      <img src={zuriInternship} alt='zuri internship logo'/>
      <p>HNG internship 9 Frontend Task</p>
      <img src={I4G} alt='Ingressive for good logo'/>
    </footer>
  )
}
