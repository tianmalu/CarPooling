import { useState } from "react";
import { Button, Modal } from "flowbite-react";

const UpcomingRideBox = () => {
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
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-yellow-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    copy link
                </a>
                <ContextModal />
            </div>
        </div>
    </>
  )
}

export default UpcomingRideBox



export function ContextModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color= "blue"> Contact Driver </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Contect Driver</Modal.Header>
        <Modal.Body>
            <p>Driver: Anna X</p>
            <p>Phone: 123456789</p>
            <p>Email:       </p>
            <p>License Plate:      XXXXX </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setOpenModal(false)}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
