import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Logo from '../assets/NexusNewz.png'

const newsItems = [
  { id: 1, title: 'Sports' },
  { id: 2, title: 'Politics' },
  { id: 3, title: 'Entertainment' },
  { id: 4, title: 'Health' },
  { id: 5, title: 'Fitness' },
];

const Navbar = ({ onSearchChange, onSearchSubmit, toggleTheme, currentTheme, theme}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Toggle menu visibility
  const handleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  // Handle search button click
  const handleSearchButtonClick = () => {
    onSearchSubmit();
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSearch(category);
    onSearchChange(category);
    onSearchSubmit();
  };

  useEffect(() => {
    const navDialog = document.getElementById('nav-dialog');
    if (navDialog) {
      navDialog.classList.toggle('hidden', !isMenuOpen);
    }
  }, [isMenuOpen]);

  return ( 
    <nav className='p-3 py-2 flex bg-gradient-to-r from-[#74512D] to-[#F8F4E1] justify-between items-center gap-2'>
      <a href="#" id='brand' className='flex gap-5 items-center'>
        <img className='object-cover max-w-12 max-h-12' src={logo} alt='' />
        <span className='text-lg text-white font-medium font-display'>
          <img className='object-cover max-w-24 max-h' src={Logo} alt="" />
        </span>
      </a>
      <div id='nav-menu' className='hidden md:flex gap-10'>
        {newsItems.map(item => (
          <button className='font-medium text-[#481E14] hover:bg-[#AF8F6F] p-2 m-2 rounded-full' key={item.id} onClick={() => handleCategoryClick(item.title)}>
            {item.title}
          </button>
        ))}
      </div>
      <div className='flex gap-5 justify-center'>
        <input
            className={`hidden md:flex gap-2 items-center border border-[#AF8F6F] p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
        />
        <button 
            className='w-[75px] h-[40px] bg-[#543310] border-none text-white text-sm cursor-pointer hidden lg:block rounded-full' 
            onClick={handleSearchButtonClick}>
              <div className='flex justify-center items-center gap-1'>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
        </button>
      </div>

      <button 
          className={`w-[75px] h-[40px] bg-[#543310] border-none p-2 m-2 text-white text-sm cursor-pointer  lg:block rounded-full`} 
          onClick={toggleTheme}
      >
        {currentTheme === 'dark' ? 'Light' : 'Dark'}
      </button>
      <div className='flex gap-3'>
        <button className='p-2 md:hidden' onClick={handleMenu}>
            <i className='fa-solid fa-bars text-[#543310] text-2xl'></i>
        </button>
      </div>

      <div id='nav-dialog' className='fixed bg-[#AF8F6F] inset-0 hidden'>
        <div id="nav-bar" className='flex justify-between py-2 bg-gradient-to-r from-[#74512D] to-[#F8F4E1] p-3'>
          <a href="#" id='brand' className='flex gap-5 items-center'>
            <img className='object-cover max-w-12 max-h-12' src={logo} alt='Logo' />
            <span className='text-lg font-medium font-display'>
              <img className='max-w-24' src={Logo} alt="" />
            </span>
          </a>
          <button className='p-2' onClick={handleMenu}>
            <i className='fa-solid fa-xmark text-[#543310] text-2xl'></i>
          </button>
        </div>
        <div className='mt-6'>
          {newsItems.map(item => (
            <button className='font-medium m-4 p-4 text-[#481E14] hover:bg-[#9f764c] block rounded-full' key={item.id} onClick={() => handleCategoryClick(item.title)}>
              {item.title}
            </button>
          ))}
          <div className='flex items-center justify-start gap-2 m-3 p-3'>
            <input
                className={`border border-[#AF8F6F] p-2 rounded-full placeholder-padding`}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
            />
            <button 
                className='w-[75px] h-[40px] bg-[#543310] border-none text-white text-sm cursor-pointer rounded-full px-2' 
                onClick={handleSearchButtonClick}><i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
