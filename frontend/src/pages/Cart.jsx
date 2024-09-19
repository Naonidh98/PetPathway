import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";


const Cart = () => {

    const [quantity, setQuantity] = useState(1);
    const handleMinusQuantity = () => {
        setQuantity((quantity - 1) < 1 ? 1 : (quantity - 1));
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div className=' bg-[#161D29] h-dvh py-8 '>
            <h1 className=' flex justify-center text-4xl text-[#1FA2FF] '>Shopping Cart</h1>
            
            <div className=' flex flex-col lg:flex-row  gap-16 px-[5%] py-10  '>
                {/* left side */}
                <div className=' w-[90%] lg:w-2/3 flex flex-col items-center justify-evenly bg-white rounded-lg  '>
                    <div className=' w-[90%] flex justify-between text-2xl pt-4 '>Items</div>

                    <div className='border-b-2 border-richblack-100 w-[90%] flex justify-center mx-[5%] mt-4 '></div>

                    <div className="  w-[90%] flex  p-4 my-4 bg-white shadow-lg rounded-lg ">

                        <div className="  flex items-center w-full justify-between ">
                            <div className="w-16 h-16 mr-4">image</div>

                            <div>
                                <h2 className="text-lg font-bold">Item</h2>
                                <p className="text-sm text-gray-600">Item description</p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold">{quantity}</span>
                            </div>

                            <div className="flex flex-col ">
                                <button className=" text-2xl " onClick={handlePlusQuantity}>
                                    <FaSortUp />
                                </button>
                                <button className=" text-2xl " onClick={handleMinusQuantity}>
                                    <FaSortDown />
                                </button>
                            </div>

                            <div className="text-lg font-bold">$value</div>

                            <button className=" text-2xl ">
                                <RiDeleteBinFill />
                            </button>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className=' w-[90%] lg:w-1/3 h-[90%] flex flex-col items-center justify-center bg-[#565ABB] rounded-lg'>
                    <div className=' text-2xl text-[#7cc8ff] pt-4 '>Order Summary</div>
                    <div className='border-b-2 border-richblack-100 w-[90%] flex justify-center mx-[5%] my-4 '></div>
                    

                </div>
            </div>
        </div>
    )
}

export default Cart