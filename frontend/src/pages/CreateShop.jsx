import React from "react";

const CreateShop = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      {/*Section 1 */}
      <div class="bg-gray-100">
        <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              The Freedom to Create the
              <span class="text-indigo-700">Websites</span>
              You Want
            </h1>
            <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              A professonal website drives sales. Create a beautiful website to
              impress and engage new customers and establish your business
              online{" "}
            </p>
          </div>
          <div class="flex justify-center items-center">
            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
              Get Started
            </button>
            <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/*Section 2  */}
      <section>
        <div className="bg-none text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                TechFest
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Space : The Timeless Infinity
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Explore your favourite events and register now to showcase your
                talent and win exciting prizes.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div class="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    className="inline-block mt-28  xl:block"
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-28  lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3  */}
      <div>
        <div className="flex flex-wrap md items-center h-screen">
          <div className="bg-none w-full md:w-1/2 h-screen">
            <div className="mx-32">
              <h1 className="text-6xl font-bold mt-16">Tokyo</h1>

              <div className="flex mt-16 font-light text-gray-500">
                <div className="pr-4">
                  <span className="uppercase">Country</span>
                  <p className="text-2xl text-gray-900 font-semibold pt-2">
                    Japan
                  </p>
                </div>
                <div className="pr-4">
                  <span className="uppercase">Region</span>
                  <p className="text-2xl text-gray-900 font-semibold pt-2">
                    Kanto
                  </p>
                </div>
                <div className="pr-4">
                  <span className="uppercase">island</span>
                  <p className="text-2xl text-gray-900 font-semibold pt-2">
                    Honshu
                  </p>
                </div>
              </div>

              <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
                Tokyo, Japan’s busy capital, mixes the ultramodern and the
                traditional, from neon-lit skyscrapers to historic temples. The
                opulent Meiji Shinto Shrine is known for its towering gate and
                surrounding woods. The Imperial Palace sits amid large public
                gardens
              </div>

              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                read more
              </button>
            </div>
          </div>
          <div className="bg-red-600 w-full md:w-1/2 h-screen">
            <img
              src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-4">
        <div className="relative  bg-richblack-900">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over a{" "}
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative text-teal-900">lazy dog</span>
                </span>
              </h2>
              <p className="mb-6 text-base text-indigo-100 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo. Sed ut perspiciatis unde omnis.
              </p>
              <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </a>
              </form>
              <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
              <a
                href="/"
                aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateShop;
