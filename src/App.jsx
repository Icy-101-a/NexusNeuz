import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Newsapp from './components/Newsapp';
import './index.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleSearchSubmit = () => {
    setSearchTerm(search);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Update body class based on theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar 
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <Newsapp search={searchTerm} theme={theme}/>
    </div>
  );
}

export default App;
