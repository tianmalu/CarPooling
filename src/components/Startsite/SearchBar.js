import { use } from 'i18next';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';


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
      <div className="container mt-8 p-8 rounded-lg shadow bg-blue-300">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleToggle("driver")}
            className={`${
              selectedOption === "driver"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md`}
          >
            Passenger
          </button>
          <button
            onClick={() => handleToggle("passenger")}
            className={`${
              selectedOption === "passenger"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md`}
          >
            Driver 
          </button>
        </div>
        <div className='bg-blue-500 rounded-md p-4'>
          <h1 className='py-4 text-2xl'>Let's see, where are you going...</h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
              <input
                  type="text"
                  placeholder="From"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full md:w-64"
              />
              <input
                  type="text"
                  placeholder="To"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full md:w-64"
              />
          </div>
          <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4 items-center">
              <input
                  type="date"
                  placeholder="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full md:w-32"
              />
              <input
                  type="time"
                  placeholder="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full md:w-32"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-md md:w-60 md:ml-4"
            >
                Search
            </button>
          </div>
        </div>
    </div>
  </div>
  )
}

export default SearchBar