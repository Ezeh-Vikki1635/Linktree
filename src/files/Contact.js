import {Route} from 'react-router-dom'

export default function Contact() {
    return (  
        
        <main>
            
        <div class="style">
          <div>
            <h2>
              <span>Contact Me </span>
            </h2>
            <p class="para">Contact Me
                Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div class="form">
            <form action="">
              <div>
                <label for="first name">First name</label>
                <input
                  type="text"
                  id="First_name"
                  name="last name"
                  placeholder="Enter your first name"
                  maxlength="10"
                  minlength="4"
                  required
                />
              </div>
              <div>
                <label for="last name">First name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last name"
                  maxlength="10"
                  minlength="4"
                  required
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="yourname@email.com"
                  required
                />
              </div>
                
              <div>
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  /*style="height: 170px"*/
                  maxlength="150"
                  required
                ></textarea>
              </div>
              <div>
                <p>You agree to providing your data to name who may contact you.</p>
              </div>
              <div>
                <input type="submit" id="btn__submit" value="Send message"  />
              </div>
            </form>
          </div>
        </div>
      </main>
    );
}
 
