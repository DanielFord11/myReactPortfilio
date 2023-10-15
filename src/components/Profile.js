import React from 'react';
import profileImage from '../Assets/Profile.png'; // Update the path accordingly

function Profile() {
  return (
    <section className="Profile">
      <div className="Center_Content">
        <div className="Hero_Content">
          <h6>Hi, my name is</h6>
        </div>

        <div className="Hero_Content">
          <h1>Daniel Ford.</h1>
          <h1>I build things for the web.</h1>
        </div>

        <div className="Hero_Content">
          <h4>
            I am a software engineering student with a background in product management and data science. Currently, I'm focused on full-stack JS web development
          </h4>
        </div>

        <div>
          <button className="Github_Button">
            <a href="#" className="Inner_Git_Button">
              Check out my GitHub!
            </a>
          </button>

          <div className="Profile_Photo">
            <img
              id="Profile_Photo"
              src={profileImage}
              alt="Profile Photo"
              height="320rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
