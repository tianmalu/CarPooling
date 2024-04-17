import React from 'react'
import FeaturedRideBox from './FeaturedRideBox';
import PreviousRideBox from './PreviousRideBox'
import UpcomingRideBox from './UpcomingRideBox';
import AddRideBox from './AddRideBox';

import { Card } from "flowbite-react";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

import { Alert } from "flowbite-react";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import { IoWarningOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaSmileWink } from "react-icons/fa";



const DriverIndex = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Alert color="warning" rounded className='mx-4'>
        <span className='flex ml-4'>
          <IoWarningOutline /> You have received {2} riding requests.
          <a href="#" className='ml-2 underline text-blue-500'>
            Click here.
          </a>
        </span>
      </Alert>
      <AddRideBox/>
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
                                <UpcomingRideBox />
                                <Banner>
                                  <div className="flex w-full justify-between border-4 border-blue-400 bg-gray-50 p-2 dark:border-gray-600 dark:bg-gray-700">
                                    <div className="mx-auto flex items-center">
                                      <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <MdAnnouncement className="mr-4 h-4 w-4" />
                                        <span className="[&_p]:inline">
                                          <a className="text-blue-500 underline" href='#' onClick={() => setOpenModal(true)}>
                                            Rider {1} 
                                          </a>
                                          <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                            <Modal.Header>Terms of Service</Modal.Header>
                                            <Modal.Body>
                                              <div className="space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                                  companies around the world are updating their terms of service agreements to comply.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                                  to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                                  soon as possible of high-risk data breaches that could personally affect them.
                                                </p>
                                              </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button onClick={() => setOpenModal(false)}>I accept</Button>
                                              <Button color="gray" onClick={() => setOpenModal(false)}>
                                                Decline
                                              </Button>
                                            </Modal.Footer>
                                          </Modal>
                                           want to join this ride.
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
                                <UpcomingRideBox />
                            </ul>
                        </Card>
                    </div>
                    {/* DOWN */}
                    <div className="flex-1 bg-gray-400 mt-1 rounded-lg shadow">
                        <Card className="max-w-full">    
                            <h1 className="text-center text-3xl font-bold py-4">Previous Rides</h1>
                            
                            <ul className='space-y-2 p-4'>
                                <PreviousRideBox />
                                <Alert color="success" rounded className='mx-4'>
                                  <span className='flex ml-4'>
                                    <FaSmileWink className='mr-2 h-4'/>

                                    You have received new rating.
                                  </span>
                                </Alert>
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

