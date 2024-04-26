import React, { useState, useEffect } from 'react';

import { Card, Rating, Button, Modal, Select, TextInput } from "flowbite-react";
import Avatar from 'react-avatar';

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

import UpcomingRideBox from '../components/Startsite/rider/UpcomingRideBox';
import PreviousRideBox from '../components/Startsite/rider/PreviousRideBox';
import Header from '../components/Startsite/Header'

const UserProfil = () => {
    const [userName, setUserName] = useState('');
    const [location, setLocation] = useState('');
    const [preference1, setPreference1] = useState('');
    const [preference2, setPreference2] = useState('');

    const handleSaveChanges = (newLocation, newPreference1, newPreference2) => {
        setLocation(newLocation);
        setPreference1(newPreference1);
        setPreference2(newPreference2);
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
                    location={location}
                    preference1={preference1}
                    preference2={preference2}
                    onSaveChanges={handleSaveChanges}
                />
            </div>
        </div>
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

export function EditModal({ location, preference1, preference2, onSaveChanges }) {
    const [openModal, setOpenModal] = useState(false);
    const [newLocation, setNewLocation] = useState(location);
    const [newPreference1, setNewPreference1] = useState(preference1);
    const [newPreference2, setNewPreference2] = useState(preference2);

    const handleSaveChanges = () => {
        onSaveChanges(newLocation, newPreference1, newPreference2);

        setOpenModal(false);
      };

    return (
      <>
        <Button className="ml-40 mt-4"color="yellow" onClick={() => setOpenModal(true)}>Edit Profil</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Edit Your Profil</Modal.Header>
          <Modal.Body>
            <ul >
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Office Preference:
              </p>
              <Select className='mb-4 mt-2' 
                    value={newPreference1} onChange={(e) => setNewPreference1(e.target.value)}>
                    {[
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