import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="py-[34px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Adoption, grooming, vet care, and top pet products—all in one
                place. Your pet’s happiness, simplified.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Adoption"
            details="Discover your perfect canine companion with ease through our user-friendly adoption platform. Browse detailed profiles, connect with shelters, and find a match that fits your lifestyle. "
            icon={<MdOutlinePets className="text-4xl" />}
          />
          <ServiceCard
            title="Store"
            details="Explore our curated selection of high-quality pet products, from nutritious food and tasty treats to cozy bedding and engaging toys.Shop with confidence knowing all items."
            icon={<IoStorefrontSharp className="text-4xl" />}
          />
          <ServiceCard
            title="Health Care"
            details="Access top-notch grooming and veterinary care with our integrated clinic services. Schedule appointments for all your pet’s needs—from health check-ups to stylish makeovers—seamlessly in one place."
            icon={<FaUserDoctor className="text-4xl" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-richblack-800  p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mx-auto mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark text-center">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6 text-center">
            {details}
          </p>
        </div>
      </div>
    </>
  );
};
