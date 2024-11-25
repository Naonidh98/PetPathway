import React from "react";

const About = () => {
  return (
    <div className="">
      {/* top */}
      <section className="my-[55px] relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    About Us
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      At Pet Pathway, we started with a simple idea: to make pet
                      adoption and care as seamless and joyful as possible. From
                      our humble beginnings, our journey has been fueled by
                      passion, innovation, and an unwavering love for pets.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        1+ Years
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Influencing Digital Landscapes Together
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        125+ Projects
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Excellence Achieved Through Success
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        26+ Awards
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our Dedication to Innovation Wins Understanding
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        99% Happy Clients
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                  Read More
                </span>
                <svg
                  className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="#4F46E5"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="about Us image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle */}
      <div>
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img
                    className=" rounded-xl object-cover"
                    src="https://plus.unsplash.com/premium_photo-1665296635110-f330783f273b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGtpZCUyMHdpdGglMjBkb2d8ZW58MHx8MHx8fDA%3D"
                    alt="about Us image"
                  />
                </div>
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1500259571355-332da5cb07aa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="about Us image"
                />
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Empowering Each Other to Succeed
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Every project we've undertaken has been a collaborative
                      effort, where every person involved has left their mark.
                      Together, we've not only constructed buildings but also
                      built enduring connections that define our success story.
                    </p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        1+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Years of Experience
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        125+
                      </h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Successful Projects
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        52+
                      </h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Happy Clients
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Read More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* quote */}
      <div className=" text-[#AFB2BF] text-center py-16 px-[10%]">
        <p className=" text-4xl font-bold mx-auto  ">
          We are passionate about revolutionizing the way we care for pets. Our
          innovative platform combines technology, expertise, and a vibrant
          community to create an unparalleled pet adoption and care experience."
        </p>
      </div>

      <div className="border-b-2 border-richblack-100 w-[90%] flex justify-center mx-[5%] "></div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 mx-[10%]">
        <div className="lg:w-1/2 mb-8 ">
          <h2 className="text-3xl font-bold text-[#FD1D1D] mb-4">
            Our Founding Story
          </h2>
          <p className="text-lg text-[#999daa] mb-4">
            Pet Pathway was born from a simple yet profound love for animals and
            a desire to make their lives better. Our founders, lifelong pet
            lovers, noticed the challenges faced by people in finding the right
            pet and providing comprehensive care for them. They envisioned a
            solution that would not only make pet adoption easier but also
            provide everything a pet owner needs under one roof.
          </p>
          <p className="text-lg text-[#999daa]">
            The idea took root when one of our founders adopted a rescue dog and
            experienced firsthand the difficulties in navigating adoption
            processes, finding reliable pet care services, and accessing quality
            pet products. This personal journey fueled the passion to create a
            platform that could simplify these challenges for others.
          </p>
        </div>
        <div className="lg:w-1/2 ">
          <img
            src="https://images.unsplash.com/photo-1628440501245-393606514a9e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            className="Mission image"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 mx-[10%]">
        <div className="lg:w-1/2 mb-8 ">
          <h2 className="text-3xl font-bold text-[#EF9511] mb-4">Our Vision</h2>
          <p className="text-lg text-[#999daa] mb-4">
            To create a world where every pet finds a loving home, and pet
            ownership is a joyful and hassle-free experience through innovation,
            compassion, and community. We aim to be the go-to platform that
            transforms the way people adopt, care for, and connect with their
            pets, fostering stronger bonds and happier lives for pets and their
            families.
          </p>
        </div>
        <div className="lg:w-1/2 mb-8 ">
          <h2 className="text-3xl font-bold text-[#12D8FA] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-[#999daa]">
            Our mission is to simplify and enhance the journey of pet ownership
            by: Connecting Pets with Loving Families: Making pet adoption easy,
            transparent, and accessible. Providing Comprehensive Care Solutions:
            Offering a one-stop platform for pet products, grooming, and
            veterinary services. Empowering Pet Owners: Equipping pet parents
            with the tools, resources, and community support they need to
            provide the best care for their furry companions.
          </p>
        </div>
      </div>

      {/* Newsletter 
      <div className="bg-gradient-to-l from-richblack-600 to-richblack-900 py-16 px-6 font-[sans-serif]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-base text-gray-300">
            Stay updated with the latest news, trends, and special offers. Don't
            miss out on our exciting updates.
          </p>
          <div className="mt-12 flex items-center overflow-hidden bg-gray-50 rounded-md max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-white/80 rounded bg-transparent py-3.5 px-4 text-gray-800 text-base focus:outline-none"
            />
            <button className="bg-blue-300 border-2 border-blue-300  text-white text-base tracking-wide py-3.5 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default About;
