import FeaturedRideBox from '../FeaturedRideBox';
import PreviousRideBox from '../PreviousRideBox'
import SearchBar from './SearchBar';
import UpcomingRideBox from '../UpcomingRideBox';

import { Card } from "flowbite-react";



const RiderIndex = () => {
  return (
    <>
        <SearchBar/>
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
                                <PreviousRideBox />
                            </ul>
                        </Card>
                    </div>
                </div>
        </div>
    </>
  )
}

export default RiderIndex