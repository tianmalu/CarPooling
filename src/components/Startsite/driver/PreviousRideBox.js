import { useState } from 'react'
import { Button } from "flowbite-react";


const PreviousRideBox = () => {
  return (
    <>   
        <div className="max-w-full px-4 py-2 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
            <div>
                <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">A----B</h1>
                <p className="font-small text-xs text-gray-500 dark:text-gray-400">8:00 11/04/2024</p>
            </div>
            <div className="flex px-4 pr-2 gap-2">
                {/* toggle modal for rating*/}
                <Button color="blue">
                    View Rating
                </Button>
            </div>
        </div>
    </>
  )
}

export default PreviousRideBox;
