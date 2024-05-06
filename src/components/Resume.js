import React from "react";
import './components.css';

const Resume = () => {
  return (
    <div>
      <iframe title='resume' src={`${process.env.PUBLIC_URL}/pdfs/Resume - Zachary Swensrude - Site Version.pdf`} width='1000px' height='1000px' />
    </div>
  );
};

export default Resume;