import React, { useState, useEffect } from 'react';

import { Button, Card, TextInput, Rating } from "flowbite-react";
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

  return (
    <>
    <Header />
    <Card className="flex flex-col min-h-screen m-4 ">
    <div className="min-h-52 border-b-4 flex flex-row "> {/* Added flex and flex-row classes */}
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
                <CiLocationOn className='mr-1 mt-2' size={18}/>
                <p className='mt-2'> Current Location: Munich</p>
            </div>
            <div className="flex items-center">
                <MdOutlineRateReview className='mr-1 mt-2' size={18}/>
                <p className='mt-2'> Rating as Driver:</p>
            </div>
            <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
            </Rating>
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