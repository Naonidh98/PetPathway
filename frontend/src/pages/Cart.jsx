import React from 'react';

const Cart = () => {
    return (
        <div className=' bg-[#525252] h-dvh '>
            {/* left side */}
            <div className=' flex flex-col lg:flex-row items-center  gap-16 px-[5%] py-[5%] '>
                <div className=' w-[90%] lg:w-2/3 flex flex-col items-center justify-evenly bg-white py-4  '>
                    <div className=' w-[90%] flex justify-between  pb-4 text-xl '>
                        <h1 className='  '>Shopping Cart</h1>
                        <h1 className='  '>Items</h1>
                    </div>
                    <div className='border-b-2 border-richblack-100 w-[90%] flex justify-center mx-[5%] '></div>
                    <div className="flex items-center justify-between p-4 mb-4 bg-white shadow-lg rounded-lg ">
                        
                        <div className="flex items-center w-full  ">
                            <div className="w-16 h-16 mr-4">image</div>

                            <div>
                                <h2 className="text-lg font-bold">Item</h2>
                                <p className="text-sm text-gray-600">Item description</p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold">1 or 2</span>
                                <div className="flex flex-col space-y-1">
                                    <button className="text-gray-700">
                                        up
                                    </button>
                                    <button className="text-gray-700">
                                        down
                                    </button>
                                </div>
                            </div>

                            
                            <div className="text-lg font-bold">$100</div>

                            
                            <button className="text-red-500">
                                bin
                            </button>
                        </div>
                    </div>
                </div>



                {/* right side */}
                <div className=' w-[90%] lg:w-1/3 h-[90%] flex items-center justify-center bg-[#565ABB] '>
                    d
                </div>
            </div>
        </div>
    )
}

export default Cart