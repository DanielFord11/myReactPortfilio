import React from 'react';
import './App.css'; // Import your CSS file
import Navbar from './Navbar'; // Import the Navbar component
import Profile from './components/Profile'; // Import the Profile component
import About from './components/About'; // Import the About component
import FeaturedProjects from './components/FeaturedProjects'; // Import the FeaturedProjects component
import ResumeButton from './components/ResumeButton'; // Import the ResumeButton component
import './style.css'; // Import the style.css file

function App() {
  return (
    <div className="App">
      {/* Render the Navbar */}
      <Navbar />

      {/* Content Container */}
      <div className="Content-Container">
        {/* Render the ResumeButton in the top right corner */}
        <div className="Top-Right">
          <ResumeButton />
        </div>

        {/* Render the Profile component */}
        <Profile />

        {/* Render the About component */}
        <About />

        {/* Render the FeaturedProjects component */}
        <FeaturedProjects />
      </div>
    </div>
  );
}

export default App;
