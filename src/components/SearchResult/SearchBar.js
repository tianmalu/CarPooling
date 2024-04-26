import { Card, Button, Datepicker, TextInput } from 'flowbite-react';
import { use } from 'i18next';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const SearchBar = () => {
    const {t} = useTranslation();

    const [passenger, setPassenger] = useState(true);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSearch = () => {
        console.log('Searching...');
    };

    const [selectedOption, setSelectedOption] = useState("driver");

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex justify-center items-center '>
      <div className="container p-8 rounded-lg ">
        <Card className='max-w-full'>      
          <div className="max-w-full">
            <TextInput id="startPoint" type="text" icon={FaLocationDot} placeholder="Enter Your Starting Point" required />
          </div>
          <div className="max-w-full">
            <TextInput id="destination" type="text" icon={FaLocationDot} placeholder="Enter Your Destination" required />
          </div>
          <div className="max-w-full">
              <Datepicker />
          </div>
            <Button color='blue'>
              <FaSearch className="mr-1 mt-0.5"/>
              Modify Search              
            </Button>
        </Card>
      </div>
    </div>
  )
}

export default SearchBar