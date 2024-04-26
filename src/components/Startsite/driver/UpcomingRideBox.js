import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const UpcomingRideBox = ({ ride }) => {
    const { departure_location, destination, departure_time, passengers } = ride;

    return (
        <div className="max-w-full px-4 py-2 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
            <div>
                <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">A{departure_location} to B{destination}</h1>
                <p className="font-small text-xs text-gray-500 dark:text-gray-400">{departure_time}</p>
            </div>
            <div className="flex px-4 pr-2 gap-2">
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {passengers.length}/4
                </a>
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    copy link
                </a>
                <CancelModal />
            </div>
        </div>
    );
}

export default UpcomingRideBox;


export function CancelModal() {
    const [openModal, setOpenModal] = useState(false);
  
    return (
      <>
        <Button color="blue" onClick={() => setOpenModal(true)}>Cancel</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Notes</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              Are you sure you want to cancel this trip? Once the trip is cancelled, it cannot be recovered again and it maybe influence your passengers.
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="blue" onClick={() => setOpenModal(false)}>Yes</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }