import './Contact.css';
import './Footer.js';


export default function Contact () {
  return ( 
    <div>
      <main>
      <div className="style">
        <div>
          <h2 id='Contact'>
            Contact Me
          </h2>
          <p className="para">
            Hi there, contact me to ask me about anything you have in
            mind.
          </p>
        </div>
        <div className="form">
          <form action="">
            <div className="name">
              <div className="label">
                <label for="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter your first name"
                  maxlength="10"
                  minlength="4"
                  required
                />
              </div>
              <div className='label'>
                <label for="last_name">Last name</label>
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
            </div>

            <div className='label'>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourname@email.com"
                required
              />
            </div>

            <div className='label'>
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                maxlength="150"
                required
              ></textarea>
            </div>
            <div>
              <input
              type="checkbox"
              id="paragraph"
              name="paragraph"
              value="paragraph"
            />
            <label for="paragraph" id='label'>You agree to providing your data to name who may contact you.</label>
            </div>
            <div>
              <input type="submit" id="btn__submit" value="Send message" />
            </div>
          </form>
        </div>
      </div>
    </main>
    </div>
   );
}
 
