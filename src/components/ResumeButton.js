import React from 'react';

function ResumeButton() {
  const handleDownloadResume = () => {

    const resumePath = '../Assets/DanielFordResume.pdf';

    const anchor = document.createElement('a');
    anchor.href = resumePath;
    anchor.download = 'DanielFordResume.pdf'; 
    anchor.target = '_blank'; 
    anchor.click();

 
    anchor.remove();
  };

  return (
    <button className="Resume_Button" onClick={handleDownloadResume}>
      Download Resume
    </button>
  );
}

export default ResumeButton;
