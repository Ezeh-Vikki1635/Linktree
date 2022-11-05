import "./Links.css";
import github from "../images/github.png";
import slack from "../images/slack.png";
import {Link} from 'react-router-dom'
import Profile from "./Profile";

export default function Links() {
  return (
    <div id="links_section">
      <Profile/>
      <a href="https://twitter.com/EzehVictoria1" target="blank">
        <div className="links_container">
          <span>Twitter Link</span>
        </div>
      </a>

      <a id="btn__zuri" href="https://training.zuri.team/" target="blank">
        <div className="links_container">
          <span>Zuri Team</span>
        </div>
      </a>

      <a id="books" href="http://books.zuri.team" target="blank">
        <div className="links_container">
          <span>Zuri Books</span>
          
        </div>
      </a>

      <a
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=Ezeh Victoria"
        target="blank"
      >
        <div className="links_container">
          <span>Python Books</span>
        </div>
      </a>

      <a id="pitch" href="https://background.zuri.team" target="blank">
        <div className="links_container">
          <span>Background Check for Coders</span>
          
        </div>
      </a>

      <a
        id="book__design"
        href="https://books.zuri.team/design-rules"
        target="blank"
      >
        <div className="links_container">
          <span>Design Books</span>
          
        </div>
      </a>
      <Link
        id="contact"
        to="/contact"
        target="blank"
      >
        <div className="links_container">
          <span>Contact Me</span>
          
        </div>
      </Link>

      <div className="social-icons">
        <a href="https://hng9.slack.com/" target="blank">
        <img src={slack} alt="" />
        </a>
        <a href="https://github.com/Ezeh-Vikki1635/linktree" target="blank">
          <img src={github} alt="" />
        </a>
        
      </div>
    </div>
  );
}
