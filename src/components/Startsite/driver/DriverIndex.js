import React, { useState, useEffect } from 'react';
import FeaturedRideBox from './FeaturedRideBox';
import PreviousRideBox from './PreviousRideBox'
import UpcomingRideBox from './UpcomingRideBox';
import AddRideBox from './AddRideBox';

import { Card, Rating } from "flowbite-react";
import Avatar from 'react-avatar';
import { Alert } from "flowbite-react";
import { Banner, Modal } from "flowbite-react";

import { IoWarningOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaSmileWink } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineRateReview } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

import axios from 'axios';


const DriverIndex = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch('../../../../public/RideReturn.json')
        .then(response => response.json())
        .then(data => {
            // Filter rides for the specified driverID
            const filteredRides = data.filter(ride => ride.driver_id === 2);
            setRides(filteredRides);
            console.log(filteredRides);
        })
        .catch(error => console.error('Error fetching data:', error));
}, []); // Run the effect once on component mount

  return (
    <>
      <Alert color="warning" rounded className='mx-4'>
        <span className='flex ml-4'>
          <IoWarningOutline /> You have received {2} riding requests.
          <a href="#warning" className='ml-2 underline text-blue-500'>
            Click here.
          </a>
        </span>
      </Alert>
      <Card className='m-4'>
        <h1 className='text-2xl'>Hi UserName! Welcome to RideLink!</h1>
        <AddRideBox/>
      </Card>
      
      <div className="flex">
                {/* Left: */}
                <div className="flex-1 bg-gray-200 p-4 m-4 rounded-lg shadow">
                    <Card className="max-w-full">
                    <h1 className="text-center text-3xl font-bold py-4">Featured Rides</h1>
                    <ul className='space-y-4 p-4'>
                        <FeaturedRideBox />
                        <FeaturedRideBox />
                        <FeaturedRideBox />
                        </ul>
                    </Card>          
                </div>
                {/* Right: */}
                <div className="flex-1 flex flex-col m-6 ">
                    {/* UP */}
                    <div className="flex-1 bg-gray-300 mb-1 rounded-lg shadow">
                        <Card className="max-w-full ">
                            
                            <h1 className="text-center text-3xl font-bold py-4">Upcoming Rides</h1>
                            
                            <ul className='space-y-4 p-4'>
                            {rides.map(ride => (
                            <UpcomingRideBox key={ride.ride_id} ride={ride} />
                        ))}
                           <NewRiderBanner />
                            </ul>
                        </Card>
                    </div>
                    {/* DOWN */}
                    <div className="flex-1 bg-gray-400 mt-1 rounded-lg shadow">
                        <Card className="max-w-full">    
                            <h1 className="text-center text-3xl font-bold py-4">Previous Rides</h1>
                            
                            <ul className='space-y-2 p-4'>
                                <PreviousRideBox />
                                <NewRatingAlert />
                                <PreviousRideBox />
                            </ul>
                        </Card>
                    </div>
                </div>
        </div>
    </>
  )
}

export default DriverIndex

const NewRatingAlert = () => {
  return(
      <Alert color="success" rounded className='mx-4'>
                        <span className='flex ml-4'>
                            <FaSmileWink className='mr-2 h-4'/>

                            You have received new rating.
                          </span>
      </Alert>
  )
}

const NewRiderBanner = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState('');
  return(
    <Banner id="warning">
                                  <div className="flex w-full justify-between border-4 border-blue-400 bg-gray-50 p-2 dark:border-gray-600 dark:bg-gray-700">
                                    <div className="mx-auto flex items-center">
                                      <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <MdAnnouncement className="mr-4 h-8 w-8" />
                                        <span className="[&_p]:inline">
                                          <a className="text-blue-500 underline" href='#' onClick={() => setOpenModal(true)}>
                                            Rider {1}  
                                          </a>
                                          <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                            <Modal.Header>Rider Information</Modal.Header>
                                            <Modal.Body>
                                            <div className="min-h-52 flex flex-row "> 
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
                                                    <HiOutlineBuildingOffice2 className='mr-1 mt-2' size={18}/>
                                                    <p className='mt-2'> Office Preference:</p>
                                                </div>
                                                <p className='ml-4'>1.MUC</p>
                                                <p className='ml-4'>2.NUR</p>
                                                
                                                <div className="flex items-center">
                                                    <MdOutlineRateReview className='mr-1 mt-2' size={18}/>
                                                    <p className='mt-2 '> Rating as Driver:</p>
                                                </div>
                                                <Rating className='ml-4'>
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star filled={false} />
                                                </Rating>
                                            </div>
                                        </div>
                                            </Modal.Body>
                                          </Modal>
                                          &nbsp; want to join this ride.
                                        </span>
                                      </p>
                                    </div>
                                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                                      <TiTick className="h-4 w-4 text-green-500"/>
                                    </Banner.CollapseButton>
                                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                                      <HiX className="h-4 w-4" />
                                    </Banner.CollapseButton>
                                  </div>
                                </Banner>
  )

}
