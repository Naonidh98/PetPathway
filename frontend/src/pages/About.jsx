import React from 'react'


const About = () => {
    return (
        <div className="">
            {/* top */}
            <div className='bg-[#161D29] text-white pb-5'>
                <div className="text-center py-16 px-6">
                    <h2 className="mt-4 text-sm text-[#999daa]">About us</h2>
                    <h1 className="text-4xl mt-8">
                        Driving Innovation in Online Education for a <br />   <span className="text-[#1FA2FF]">Brighter Future</span>
                    </h1>
                    <p className=" mx-[20%] text-lg text-[#999daa] mt-6">
                        Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>

                <div className=' flex justify-between text-black mx-[10%] '>
                    <div className=' bg-white w-80 h-48 '>images</div>
                    <div className=' bg-white w-80 h-48 '>images</div>
                    <div className=' bg-white w-80 h-48 '>images</div>
                </div>

            </div>



            {/* quote */}
            <div className=" text-[#AFB2BF] text-center py-16 px-[10%]">
                <p className=" text-4xl font-bold mx-auto  ">
                    We are passionate about revolutionizing the way we learn. Our innovative platform <span className='text-[#12D8FA]'>combines technology</span>, <span className='text-[#F87424]'>expertise</span>, and community to create an <span className='text-[#F09912]'>unparalleled educational experience</span>."
                </p>
            </div>

            <div className='border-b-2 border-richblack-100 w-[90%] flex justify-center mx-[5%] '></div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 mx-[10%]">
                <div className="lg:w-1/2 mb-8 ">
                    <h2 className="text-3xl font-bold text-[#FD1D1D] mb-4">Our Founding Story</h2>
                    <p className="text-lg text-[#999daa] mb-4">
                        Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                    </p>
                    <p className="text-lg text-[#999daa]">
                        As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                    </p>
                </div>
                <div className="lg:w-1/2 ">
                    <img
                        src=""
                        alt="Image"
                        className=""
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 mx-[10%]">
                <div className="lg:w-1/2 mb-8 ">
                    <h2 className="text-3xl font-bold text-[#EF9511] mb-4">Our Vision</h2>
                    <p className="text-lg text-[#999daa] mb-4">
                        With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                    </p>
                </div>
                <div className="lg:w-1/2 mb-8 ">
                    <h2 className="text-3xl font-bold text-[#12D8FA] mb-4">Our Mission</h2>
                    <p className="text-lg text-[#999daa]">
                        Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
