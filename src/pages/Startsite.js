import FeaturedRideBox from '../components/Startsite/FeaturedRideBox';
import PreviousRideBox from '../components/Startsite/PreviousRideBox';
import SearchBar from '../components/Startsite/SearchBar';

const Startsite = () => {
    
  return (
    <>
      <SearchBar/>
      <div className="flex mt-8 mb-8">
            {/* Left: */}
            <div className="flex-1 bg-gray-200 p-4 m-4 rounded-lg shadow">
                <h1 className="text-center text-2xl font-bold py-4">Featured Rides</h1>
                <ul className='space-y-4 flex flex-col items-center'>
                  <FeaturedRideBox />
                  <FeaturedRideBox />
                  <FeaturedRideBox />
                </ul>
                
            </div>
            {/* Right: */}
            <div className="flex-1 flex flex-col m-4 ">
                {/* up */}
                <div className="flex-1 bg-gray-300 mb-1 rounded-lg shadow">
                    <h1 className="text-center text-xl font-bold py-4">Upcoming Rides</h1>
                </div>
                {/* down */}
                <div className="flex-1 bg-gray-400 mt-1 rounded-lg shadow">
                    <h1 className="text-center text-xl font-bold py-4">Previous Rides</h1>
                    <ul className='space-y-4 flex flex-col items-center'>
                      <PreviousRideBox />
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Startsite;