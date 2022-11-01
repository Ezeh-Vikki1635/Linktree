
import './Profile.css'
import Vikki from "../images/Vikki.jpg";

export default function Profile() {
  return (
    <div id='profile_section' className="">
      <img id='profile__img' src={Vikki} alt=""/>
      <h4 id='twitter' >@EzehVictoria1</h4>
      {false && <p id='slack'>Ezeh Victoria</p>}
    </div>
    
  )
}
