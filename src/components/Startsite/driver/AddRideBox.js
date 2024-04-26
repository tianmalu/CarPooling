import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Datepicker, TextInput, Select } from 'flowbite-react';

import { FaLocationDot } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";


const AddRideBox = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center p-4">
      <Button color='blue' className='flex w-full' onClick={() => setOpenModal(true)}>
        <IoMdAddCircleOutline className='h-5 w-6 mr-1'/> Add a new ride
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create A New Ride</Modal.Header>
        <Modal.Body>
          <div className='flex justify-center items-center '>
            <div className="container p-2 rounded-lg space-y-4">
                <div className="max-w-full">
                    <TextInput id="startPoint" type="text" icon={FaLocationDot} placeholder="Enter Your Starting Point" required />
                </div>
                <div className="max-w-full">
                    <TextInput id="destination" type="text" icon={FaLocationDot} placeholder="Enter Your Destination" required />
                </div>
                <div className="max-w-full">
                    <Datepicker />
                </div>
                <div className="max-w-full">
                    <Select>
                        <option value="apple"> <FaCarSide />Car 1</option>
                        <option value="banana"> <FaCarSide />Car 2</option>
                    </Select>
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='blue' onClick={() => setOpenModal(false)}>Create Ride</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddRideBox;
