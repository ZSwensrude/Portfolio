import React from "react";
import './components.css';

const Resume = () => {
  return (
    <div  >
      <iframe className="pdf" title='resume' src={`${process.env.PUBLIC_URL}/pdfs/Resume - Zachary Swensrude - Site Version.pdf`} />
    </div>
  );
};

export default Resume;