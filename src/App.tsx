import React, { useState } from 'react';
import './App.css';
import ConfigButton from './components/ConfigButton';
import Sidebar from './components/Sidebar';

/**
 * Renders the app component.
 *
 * @component
 * @return {JSX.Element} The rendered component.
 */
function App() {
  const [isSidebarVisible, toggleSideBar] = useState(false);
  return (
    <div className="App">
      <ConfigButton
        toggleSideBar={() => toggleSideBar(!isSidebarVisible)}
        isSidebarVisible={isSidebarVisible}
      />
      <div className='text-container'/>
      <Sidebar isVisible={isSidebarVisible} />
    </div>
  );
}

export default App;
