import { useState } from 'react';
import './App.css';
import ZachNav from './components/ZachNav';


function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const onSelectTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ZachNav activeTab={activeTab} onSelectTab={onSelectTab}/>
        <h3>Welcome to Zach's portfolio! Check out some of my previous works below!</h3>
      </header>
    </div>
  );
}

export default App;
