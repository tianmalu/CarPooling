import { useState } from 'react'
import { Button, Modal, Rating } from "flowbite-react";


const PreviousRideBox = () => {

    const [isRated,setIsRated] = useState(false)
    const rating = useState()

  return (
    <>   
        <div className="max-w-full px-4 py-2 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
            <div>
                <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">A----B</h1>
                <p className="font-small text-xs text-gray-500 dark:text-gray-400">8:00 11/04/2024</p>
            </div>
            <div className="flex px-4 pr-2 gap-2">
                {/* toggle modal for rating*/}
                <RatingModal  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                </RatingModal>
            </div>
        </div>
    </>
  )
}

export default PreviousRideBox;


export function RatingModal() {
    const [openModal, setOpenModal] = useState(false);
    const [rating, setRating] = useState(0); // 用于跟踪评分
    const [hoverIndex, setHoverIndex] = useState(-1); // 用于跟踪鼠标悬浮的星星索引

    // 点击星星时更新评分
    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    // 鼠标进入星星时更新悬浮状态
    const handleStarHover = (index) => {
        setHoverIndex(index);
    };

    // 鼠标离开星星时清除悬浮状态
    const handleStarLeave = () => {
        setHoverIndex(-1);
    };

    // 点击星星区域外部时清空评分
    const handleAreaClick = () => {
        setRating(0);
    };

    return (
        <>
            <Button color="blue" onClick={() => setOpenModal(true)}>Rating</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Leave your rate for this ride!</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6" onClick={handleAreaClick}> {/* 点击星星区域外部时清空评分 */}
                        <h1 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Is driver friendly?
                        </h1>
                        <Rating size="lg">
                            {Array.from({ length: 5 }, (_, index) => (
                                <Rating.Star
                                    key={index}
                                    filled={index < rating || index <= hoverIndex} // 判断当前星星是否被点击或鼠标悬浮
                                    onClick={() => handleStarClick(index)} // 点击星星时更新评分
                                    onMouseEnter={() => handleStarHover(index)} // 鼠标进入星星时更新悬浮状态
                                    onMouseLeave={handleStarLeave} // 鼠标离开星星时清除悬浮状态
                                />
                            ))}
                        </Rating>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            some submission conditions maybe....
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="blue" onClick={() => setOpenModal(false)}>Submit</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}