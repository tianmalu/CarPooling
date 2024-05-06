import React, { useState, useEffect } from 'react';

import { Card, Rating, Button, Modal, Select, TextInput, Table } from "flowbite-react";
import Avatar from 'react-avatar';

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiCarSimpleFill } from "react-icons/pi";


import UpcomingRideBox from '../components/Startsite/rider/UpcomingRideBox';
import PreviousRideBox from '../components/Startsite/rider/PreviousRideBox';
import Header from '../components/Startsite/Header'

const UserProfil = () => {
    const [userName, setUserName] = useState('');
    const [location, setLocation] = useState('');
    const [preference1, setPreference1] = useState('');
    const [preference2, setPreference2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cars, setCars] = useState([]);
    const [CarName, setCarName] = useState('');
    const [seat, setSeat] = useState(0);
    const [plate, setPlate] = useState('');

    const handleSaveChanges = (newLocation, newPreference1, newPreference2, newPhoneNumber) => {
        setLocation(newLocation);
        setPreference1(newPreference1);
        setPreference2(newPreference2);
        setPhoneNumber(newPhoneNumber);
      };

      const handleAddCar = (newCarName, newSeat, newPlate) => {
        setCars(prevCars => [...prevCars, { name: newCarName, seat: newSeat, plate: newPlate }]);
      };

      
  return (
    <>
    <Header />
    <Card className="flex flex-col min-h-screen m-4 ">
        <div className="min-h-52 border-b-4 flex flex-row "> 
            <div className="flex-1 border-r-2 flex flex-col justify-center items-center">
                <Avatar className='' name={userName} round={true} size="160" />
                <div className="flex items-center">
                    <FaUser className='mr-1 mt-2' size={18}/>
                    <p className='mt-2'> userName{userName}</p>
                </div>
                <div className="flex items-center">
                    <MdEmail className='mr-1 mt-2' size={18}/>
                    <p className='mt-2'> name@cgi.com</p>
                </div>
            </div>
            <div className="flex-1  flex flex-col m-4">
            <div className="flex items-center">
                    <FaPhoneAlt className='mr-1 mt-2' size={22}/>
                    <p className='mt-2'> Phone Number: </p>
                    <p className='mt-2 ml-2'>{phoneNumber}</p>
                </div>

                <div className="flex items-center">
                    <HiOutlineBuildingOffice2 className='mr-1 mt-2' size={22}/>
                    <p className='mt-2'> Office Preference:</p>
                </div>

                    <p className='ml-4'>1. {preference1}</p>
                    <p className='ml-4'>2. {preference2}</p>
                    
                <div className="flex items-center">
                    <CiLocationOn className='mr-1 mt-2' size={22}/>
                    <p className='mt-2'> Current Location: {location}</p>
                </div>
                <div className="flex items-center">
                    <MdOutlineRateReview className='mr-1 mt-2' size={22}/>
                    <p className='mt-2'> Rating as Driver:</p>
                </div>
                <Rating className='ml-6'>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                </Rating>
                <EditModal 
                    phoneNumber={phoneNumber}
                    location={location}
                    preference1={preference1}
                    preference2={preference2}
                    onSaveChanges={handleSaveChanges}
                />
            </div>
        </div>
      {/* add cars */}
        <div className="min-h-48 border-b-4">
          {!cars.length === 0? (
            <>
            <div className="flex items-center">
                    <PiCarSimpleFill className='mr-1 mt-2 ml-2' size={28}/>
                    <p className='mt-2'> You have no car available at RideLink yet. You can add a car here!</p>
            </div>
          <AddCarModal 
              carName={CarName}
              seat={seat}
              plate={plate}
              onSaveChanges={handleAddCar}
          />
            </>
          ) : (
            <div className="flex flex-col">
              <p className='mt-2 ml-2 text-2xl'>Want to Add a Car? </p>
              <AddCarModal className='mb-4'
                carName={CarName}
                seat={seat}
                plate={plate}
                onSaveChanges={handleAddCar}
              />
              <div className="flex items-center mt-4">
                    <PiCarSimpleFill className='mr-1 mt-2 ml-2' size={28}/>
                    <p className='mt-2'> Your Available Cars:</p>
              </div>
              <CarTable 
                cars={cars}
                setCars={setCars}
              />
              
            </div>
          )}
        </div>
        {/* Rides */}
      <div className="min-h-96 rounded-lg">
        <Card className='m-2'>
            <div className="flex items-center">
                <FaCarOn className='mr-2' size={24}/>
                <h1 className="text-lg">Upcoming Rides:</h1>
            </div>
            
            <UpcomingRideBox/>
            <UpcomingRideBox/>
        </Card>
        <Card className='m-2'>
            <div className="flex items-center">
                <FaHistory className='mr-2' size={24}/>
                <h1 className="text-lg">  Previous Rides:</h1>
            </div>
            <PreviousRideBox />
            <PreviousRideBox />
            <PreviousRideBox />
            <PreviousRideBox />
        </Card>
      </div>
    </Card>
    </>
    
  )
}

export default UserProfil



export function AddCarModal({ seat, CarName, plate, onSaveChanges}) {
  const [openModal, setOpenModal] = useState(false);
  const [newCarName, setNewCarName] = useState(CarName);
  const [newSeat, setNewSeat] = useState(seat);
  const [newPlate, setNewPlate] = useState(plate);

  const handleSaveChanges = () => {
    onSaveChanges(newCarName, newSeat, newPlate);
    setOpenModal(false);
  };

    return (
      <>
       <Button color="blue" className="w-full h-12 mt-6" onClick={() => setOpenModal(true)}> <IoIosAddCircleOutline className='mr-4 mt-0' size={40}/>
            <p className='text-xl mt-0'>Add a Car</p></Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Add a Car</Modal.Header>
          <Modal.Body>
            <ul>
              <p className="text-base leading-relaxed text-gray-500 mt-0 dark:text-gray-400">
                Car Name:
              </p>
              <TextInput className="mt-2" id="CarName" type="text" placeholder="Enter Your Car Name" value={newCarName} onChange={(e) => setNewCarName(e.target.value)} required/>
            </ul>
            <ul >
              <p className="text-base leading-relaxed text-gray-500 mt-4 dark:text-gray-400">
                Number of Car Seat:
              </p>
              <TextInput 
                className="mt-2" 
                id="CarName" 
                type="number" 
                placeholder="Number of Seats" 
                value={newSeat} 
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value >= 1 && value <= 8) {
                    setNewSeat(value);
                  }
                }} 
                required
              />            
            </ul>
            <ul>
              <p className="text-base leading-relaxed text-gray-500 mt-4 dark:text-gray-400">
                License Plate:
              </p>
              <TextInput className="mt-2" id="CurrentLocation" type="text" placeholder="Enter Your Car Plate" value={newPlate} onChange={(e) => setNewPlate(e.target.value)} required/>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button color="blue" onClick={handleSaveChanges}> Add the Car</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

    export function EditModal({ location, preference1, preference2, onSaveChanges,phoneNumber }) {
      const [openModal, setOpenModal] = useState(false);
      const [newLocation, setNewLocation] = useState(location);
      const [newPreference1, setNewPreference1] = useState(preference1);
      const [newPreference2, setNewPreference2] = useState(preference2);
      const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  
      const handleSaveChanges = () => {
          onSaveChanges(newLocation, newPreference1, newPreference2, newPhoneNumber);
          setOpenModal(false);
        };
  
      return (
        <>
          <Button className="ml-40 mt-4"color="yellow" onClick={() => setOpenModal(true)}>Edit Profil</Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Edit Your Profil</Modal.Header>
            <Modal.Body>
            <ul>
                <p className="text-base leading-relaxed text-gray-500 mt-4 dark:text-gray-400">
                  Phone Number:
                </p>
                <TextInput className="mt-2" id="PhoneNumber" type="text" placeholder="Enter Your Phone Number" value={newPhoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} required/>
              </ul>
              <ul >
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Office Preference:
                </p>
                <Select className='mb-4 mt-2' 
                      value={newPreference1} onChange={(e) => setNewPreference1(e.target.value)}>
                      {[
                          "",
                          "Munich",
                          "Leinfelden-Echterdingen",
                          "Cologne",
                          "Berlin",
                          "Bochum",
                          "Dusselsdorf",
                          "Braunschweig",
                          "Aalen",
                          "Stuttgart",
                          "Potsdam",
                          "Mannheim",
                          "Leipzig",
                          "Koblenz",
                          "Kassel",
                          "Karlsruhe",
                          "Hannover",
                          "Kaiserslautern",
                          "Hamburg",
                          "Halle",
                          "Eschborn",
                          "Erlangen",
                          "Erfurt",
                          "Dresden",
                          "Darmstadt",
                          "Bremen",
                          "Bielefeld",
                          "Alsfeld",
                          "Ansbach"
                      ].sort().map((city, index) => (
                          <option key={index} value={city}>{city}</option>
                      ))}
                  </Select>
                  <Select className='mb-4 mt-2' 
                      value={newPreference2} onChange={(e) => setNewPreference2(e.target.value)}>
                      {[
                          "",
                          "Munich",
                          "Leinfelden-Echterdingen",
                          "Cologne",
                          "Berlin",
                          "Bochum",
                          "Dusselsdorf",
                          "Braunschweig",
                          "Aalen",
                          "Stuttgart",
                          "Potsdam",
                          "Mannheim",
                          "Leipzig",
                          "Koblenz",
                          "Kassel",
                          "Karlsruhe",
                          "Hannover",
                          "Kaiserslautern",
                          "Hamburg",
                          "Halle",
                          "Eschborn",
                          "Erlangen",
                          "Erfurt",
                          "Dresden",
                          "Darmstadt",
                          "Bremen",
                          "Bielefeld",
                          "Alsfeld",
                          "Ansbach"
                      ].sort().map((city, index) => (
                          <option key={index} value={city}>{city}</option>
                      ))}
                  </Select>
              </ul>
              <ul>
                <p className="text-base leading-relaxed text-gray-500 mt-4 dark:text-gray-400">
                  Current Location:
                </p>
                <TextInput className="mt-2" id="CurrentLocation" type="text" placeholder="Enter Your Current Location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button color="blue" onClick={handleSaveChanges}>Save Changes</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
  }

  
  export function CarTable( {cars, setCars}) {
    
    const handleSaveChanges = (id, newCarName, newSeat, newPlate) => {
      setCars(cars.map(car => car.id === id ? { id, name: newCarName, seat: newSeat, plate: newPlate } : car));
    };

    const handleDelete = (rowId) => {
      setCars(cars.filter(car => car.id !== rowId));
    };


    return (
      <div className="overflow-x-auto mt-2 p-2 mb-2">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Car Name</Table.HeadCell>
            <Table.HeadCell>Seats</Table.HeadCell>
            <Table.HeadCell>License Plate</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cars.map((car, index) => (
              <Table.Row key={index}>
                <Table.Cell>{car.name}</Table.Cell>
                <Table.Cell>{car.seat}</Table.Cell>
                <Table.Cell>{car.plate}</Table.Cell>
                <Table.Cell>
                <EditCarModal 
                  id={car.id}
                  seat={car.seat}
                  carName={car.name}
                  plate={car.plate}
                  onSaveChanges={handleSaveChanges}
                />
              </Table.Cell>
              <Table.Cell>
              <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500" onClick={() => handleDelete(car.id)}>
                  Delete
                </a>    
              </Table.Cell>
              </Table.Row>
            ))}
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                CAR 2
              </Table.Cell>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>XXXXXXX</Table.Cell>
              <Table.Cell>
                <EditCarModal 
                  seat={3}
                  carName={"CAR 2"}
                  plate={"XXXXXXX"}
                  onSaveChanges={handleSaveChanges}
                />
              </Table.Cell>
              <Table.Cell>
                <a href="#"
                 className="font-medium text-red-600 hover:underline dark:text-red-500" >
                  Delete
                </a>    
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
  
  export function EditCarModal({ id, seat, carName, plate, onSaveChanges}) {
    const [openModal, setOpenModal] = useState(false);
    const [newCarName, setNewCarName] = useState(carName);
    const [newSeat, setNewSeat] = useState(seat);
    const [newPlate, setNewPlate] = useState(plate);
  
    const handleSaveChanges = () => {
      onSaveChanges(id, newCarName, newSeat, newPlate);
      setOpenModal(false);
    };
  
      return (
        <>
          <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => setOpenModal(true)}>
                  Edit
          </a>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Edit Car Information</Modal.Header>
            <Modal.Body>
              <ul>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Car Name:
                </p>
                <TextInput className="mt-2" id="CarName" type="text" placeholder="Enter Your Car Name" value={newCarName} onChange={(e) => setNewCarName(e.target.value)} required/>
              </ul>
              <ul >
                <p className="text-base leading-relaxed text-gray-500 mt-4 dark:text-gray-400">
                  Number of Car Seat:
                </p>
                <TextInput 
                  className="mt-2" 
                  id="CarSeat" 
                  type="number" 
                  placeholder="Number of Seats" 
                  value={newSeat} 
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value >= 1 && value <= 8) {
                      setNewSeat(value);
                    }
                  }} 
                  required
                />            
              </ul>
              <ul>
                <p className="text-base leading-relaxed text-gray-500 mt-4 dark:text-gray-400">
                  License Plate:
                </p>
                <TextInput className="mt-2" id="Licenseplate" type="text" placeholder="Enter Your Car Plate" value={newPlate} onChange={(e) => setNewPlate(e.target.value)} required/>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button color="blue" onClick={handleSaveChanges}>Save Changes</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }  