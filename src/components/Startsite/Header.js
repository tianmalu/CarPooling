import React, { useState, useEffect } from 'react';
import { Avatar, Button, Dropdown, Navbar, Label, TextInput } from "flowbite-react";


const Header = ({ darkMode, setDarkMode }) => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className='sticky top-0 w-full z-50'>
            <Navbar fluid rounded className='sticky'>
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-3xl text-blue-800 font-semibold dark:text-white">RideLink</span>
                </Navbar.Brand>
                
                <div className="flex md:order-2">
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@cgi.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Ridings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Button color='blue'>
                            Sign Out
                        </Button>
                    </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <div className="max-w-full flex gap-4 px-8">
                    <TextInput id="headerSearch" type="text"  placeholder="Search for ..." required />
                    <Button color='blue'> Search </Button>
                </div>
            </Navbar>
        </nav>
      );
}

export default Header;
