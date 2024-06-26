import { Card, Button, Datepicker, TextInput } from 'flowbite-react';
import { use } from 'i18next';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const SearchBar = ({welcome}) => {
    const {t} = useTranslation();

    const [passenger, setPassenger] = useState(true);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [time, setTime] = useState('');

    const handleSearch = () => {
        console.log('Searching...');
    };

    const [selectedOption, setSelectedOption] = useState("driver");


  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div className='flex justify-center items-center '>
      <div className="container p-2 rounded-lg ">
        <Card className='max-w-full'> 
          {welcome && (
            <h1 className='text-2xl mb-4'>Hi UserName! Welcome to RideLink!</h1>
          )}  
          <div className="max-w-full">
            <TextInput id="startPoint" type="text" icon={FaLocationDot} placeholder="Enter Your Starting Point" required />
          </div>
          <div className="max-w-full">
            <TextInput id="destination" type="text" icon={FaLocationDot} placeholder="Enter Your Destination" required />
          </div>
          <div className="max-w-full">
              <Datepicker selected={selectedDate} onSelectedDateChanged={handleDateChange}
              minDate={new Date()} maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}/>
          </div>
            <Button color='blue' href='/search'>
              <FaSearch className="mr-1 mt-0.5"/>
              {welcome === 1 ? 'Search' : 'Modify Search'}             
            </Button>
        </Card>
      </div>
    </div>
  )
}

export default SearchBar