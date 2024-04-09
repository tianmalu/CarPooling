import React, { useState, useEffect } from 'react';

const Header = ({ darkMode, setDarkMode }) => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [searchSize, setSearchSize] = useState('lg'); // 默认搜索框大小为 large

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 在窗口大小改变时更新搜索框大小
    useEffect(() => {
        const handleResize = () => {
            // 根据窗口宽度设置搜索框大小
            if (window.innerWidth < 768) {
                setSearchSize('sm'); // 小屏幕下搜索框为 small
            } else {
                setSearchSize('lg'); // 大屏幕下搜索框为 large
            }
        };

        window.addEventListener('resize', handleResize);

        // 初始化时执行一次
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`${darkMode ? 'bg-black' : 'bg-gray-100'} sticky top-0 w-full flex justify-between items-center ${isAtTop ? 'p-4' : 'p-2'} text-${darkMode ? 'white' : 'black'} transition-all duration-100`}>
            {/* Logo */}
            <div className="flex items-center">
                <a href='#home' className={`text-4xl font-bold ${darkMode ? 'text-yellow-400' : 'text-blue-800'}`}>RideLink</a>
            </div>
            {/* Search */}
            <form className={`max-w-${searchSize} mx-auto`}>   
                <label htmlFor="default-search" className="sr-only">Search</label>
                <div className="relative flex">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className={`block flex-grow px-16 m-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search..." required />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 m-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-8 py-2">Search</button>
                </div>
            </form>
            {/* Avatar */}
            <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </div>
        </nav>
    );
}

export default Header;
