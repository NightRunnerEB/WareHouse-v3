import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import GoodsList from './components/GoodsList/GoodsList';
import './App.css';

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <div className="app-container">
        <SideMenu isCollapsed={isCollapsed} />
        <GoodsList />
      </div>
    </div>
  );
};

export default App;
