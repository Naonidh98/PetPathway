import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate  = useNavigate();

  return (
    <footer class="bg-richblack-800 mt-[15px] text-gray-300 py-6 px-16 font-sans tracking-wide">
      <div class="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p class="text-[15px] leading-loose">
          © PetPathway. All rights reserved.
        </p>

        <ul class="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li>
            <a href="javascript:void(0)" class="text-[15px] hover:text-white">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="text-[15px] hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <button class="text-[15px] hover:text-white" onClick={()=>{
              navigate("/contact");
              window.scroll(0,0)
            }}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
