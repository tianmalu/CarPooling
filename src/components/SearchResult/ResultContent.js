import React ,  { useState }from 'react'
import { Card, Rating, Button, Modal, Select, TextInput } from "flowbite-react";
import FeaturedRideBox from '../Startsite/rider/FeaturedRideBox';

const ResultContent = () => {
  return (
    <Card className='m-2 p-8'>
            <div className="flex items-center">
                <h1 className="text-2xl">Search Results:</h1>
            </div>
            
            <FeaturedRideBox/>
            <FeaturedRideBox/>
            <FeaturedRideBox/>
            <FeaturedRideBox/>
            <FeaturedRideBox/>
            <FeaturedRideBox/>
            <h1 className="text-center">No Results Found...</h1>
    </Card>
  )
}

export default ResultContent