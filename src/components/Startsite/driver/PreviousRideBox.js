import { useState } from 'react'
import { Button, Modal, Rating } from "flowbite-react";


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
                <RatingModal />
            </div>
        </div>
    </>
  )
}

export default PreviousRideBox;


export function RatingModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button color="blue" onClick={() => setOpenModal(true)}>View Rating</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Your Rating from This Trip!</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6" > 
                        <h1 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            This is how the rider rates this trip:
                        </h1>
                        <Rating size="lg">
                        <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}