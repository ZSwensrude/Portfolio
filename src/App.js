import { useState } from 'react';
import './App.css';
import ZachNav from './components/ZachNav';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';


function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const onSelectTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <div className="App-header">
        <ZachNav activeTab={activeTab} onSelectTab={onSelectTab}/>
        <div className='content'>
          {
            {
              'home': <Home onSelectTab={onSelectTab} />,
              'projects': <Projects />,
              'about': <About />,
              'resume': <Resume />
            }[activeTab]
          }
        </div>
      </div>
    </div>
  );
}

export default App;
