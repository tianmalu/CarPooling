import React from 'react'
import { Button, Modal, Rating, Avatar } from "flowbite-react";
import { useState } from "react";

import { MdOutlineRateReview } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";



const FeaturedRideBox = () => {
  return (
    <>   
        <div className="max-w-full px-4 py-2 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
            <div>
                <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">A----B</h1>
                <p className="font-small text-xs text-gray-500 dark:text-gray-400">8:00 11/04/2024</p>
            </div>
            <div className="flex px-4 pr-2 gap-2">
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-yellow-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    1/4
                </a>
                <DetailsModal />

            </div>
        </div>
    </>
  )
}

export default FeaturedRideBox;


export function DetailsModal() {
    const [openModal, setOpenModal] = useState(false);
    const [carType, setCarType] = useState("");
    return (
      <>
        <Button color="blue" onClick={() => setOpenModal(true)}>See Details</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Ride Informations</Modal.Header>
          <Modal.Body>
          <div className="min-h-52 flex flex-row "> 
            <div className="flex-1 border-r-2 flex flex-col justify-center items-center">
                <p>FROM</p>
                <div className="flex items-center">
                    <p className='mt-2 text-2xl'> departure_location</p>
                </div>
                <p>TO</p>
                <div className="flex items-center">
                    <p className='mt-2 text-2xl'> destination</p>
                </div>
                <div className="flex items-center">
                    <FaCalendarAlt className='mr-1 mt-2' size={18}/>
                    <p className='mt-2'> departure_time</p>
                </div>
                <div className="flex items-center">
                    <GiDuration className='mr-1 mt-2' size={18}/>
                    <p className='mt-2'> duration</p>
                </div>
                
            </div>
            <div className="flex-1  flex flex-col m-4">
                <div className="flex items-center">
                    <FaCarSide  className='mr-2 mt-2' size={22}/>

                    <p className='mt-2'> Car type:{carType}</p>
                </div>

                <div className="flex items-center">
                    <IoIosPeople className='mr-2 mt-2' size={22}/>
                    <p className='mt-2'> Passengers:</p>
                </div>
                <Avatar.Group className='ml-8'>
                  <Avatar name="P1" rounded stacked />
                  <Avatar name="P1" rounded stacked />
                  <Avatar name="P1" rounded stacked />
                </Avatar.Group>
                <div className="flex items-center">
                    <MdOutlineRateReview className='mr-2 mt-2' size={22}/>
                    <p className='mt-2'> Driver Rating:</p>
                </div>
                <Rating className='ml-8'>
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
      </>
    );
  }