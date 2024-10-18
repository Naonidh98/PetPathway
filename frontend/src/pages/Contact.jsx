import React from "react";

const Contact = () => {
  return (
    <div className="font-poppins w-screen h-screen flex flex-col justify-center items-center bg-[#121721]">
      <h1 className="text-3xl font-bold p-0 mb-4 flex  items-center text-white gap-2">
        Contact Us
      </h1>
      <div className="flex w-[94%] max-w-[1200px] h-[500px] rounded-xl p-4 font-roboto">
        {/* Right */}
        <div className="w-2/5 text-white">
          <div className="bg-[#161d29] p-4 rounded-xl ">
            <div class="flex items-center">
              <h3 class="text-lg font-bold">Chat on us</h3>
            </div>
            <p>Our friendly team is here to help.</p>
            <p>petpathway8@mail address</p>

            <div class="flex items-center mt-4">
              <h3 class="text-lg font-bold">Visit us</h3>
            </div>
            <p>Come and say hello at our office HQ.</p>
            <p>Here is the location/address</p>

            <div class="flex items-center mt-4">
              <h3 class="text-lg font-bold">Call us</h3>
            </div>
            <p>Mon - Fri From 8am to 5pm</p>
            <p>+123 456 7890</p>
          </div>
        </div>

        {/* Left */}
        <div className="w-3/5 rounded-xl p-4 ml-4 bg-[#161d29] ">
          <form className="max-w-md mx-auto flex flex-col">
            <div className="mb-2 flex-row">
              <div className="flex flex-row  gap-4">
                {/* first name input */}
                <div className="flex flex-col mb-2">
                  <label className="block mb-2 text-white">First Name</label>
                  <input
                    type="text"
                    className="w-full  rounded-md px-4 py-2 bg-richblack-900 border-[1px] border-white/80"
                    placeholder="Enter your first name..."
                    required
                  />
                </div>
                {/* last name input */}
                <div className="flex flex-col">
                  <label className="block mb-2  text-white">Last Name</label>
                  <input
                    type="text"
                    className="w-full  rounded-md px-4 py-2 bg-richblack-900 border-[1px] border-white/80"
                    placeholder="Enter your last name..."
                    required
                  />
                </div>
              </div>
              {/* email input */}
              <label className="block mb-2  text-white">Email Name</label>
              <input
                type="email"
                className="w-[100%]  rounded-md px-4 py-2 mb-2 bg-richblack-900 border-[1px] border-white/80"
                placeholder="Enter your email..."
                // className="w-[100%] border bg-[#424854] border-none outline-none  rounded-md px-4 py-2 mb-2"
                required
              />
              {/* phone input */}
              <label className="block mb-2  text-white">Phone Number</label>
              <input
                type="text"
                className="w-[100%]  rounded-md px-4 py-2 bg-richblack-900 border-[1px] border-white/80"
                placeholder="Enter your phone number..."
                required
              />
            </div>
            {/* message field  */}
            <div className="mb-2">
              <label className="block  mb-2  text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                name="message"
                className="w-full  rounded-md px-4 py-2 bg-richblack-900 border-[1px] border-white/80"
                placeholder="Enter your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-2 px-4 rounded w-[100%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
