import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import RawHtml from "react-raw-html";
import { LoadingTwo } from "../components";
import { getPetDetail } from "../services/operations/adopt";

const Pet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(
      getPetDetail(
        {
          petId: id,
        },
        token,
        setData,
        setLoading
      )
    );
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <LoadingTwo />
      </div>
    );
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto">
      {data && (
        <div className="">
          <button
            className="mx-5 md:mx-10 mt-5 flex gap-2 items-center hover:text-[#2d42bb]"
            onClick={() => {
              navigate("/adopt");
            }}
          >
            <IoIosArrowBack /> Back
          </button>
          <div className="w-full items-center mt-4">
            {/* blog title  */}
            <div className="mb-4">
              <h1 className="w-full text-3xl xl:text-5xl font-bold text-center">
                {data?.name}
              </h1>
            </div>

            <div className="mb-10 text-center">
              {/* blog author */}
              <p className="text-base text-center text-gray-600 text-[#b4b4b4]">
                Breed : <span>{data?.breed}</span>
              </p>

              <p className="text-[gray] text-sm">
                Posted : <span>{data?.createdAt.split("T")[0]}</span>
              </p>
            </div>
            {/* pet Image */}
            <div>
              {true && (
                <div className="w-[80%] md:max-w-[450px] rounded-lg mb-10 mx-auto">
                  <img
                    src={data?.thumbnail}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* blog Description */}
            <div className="w-full text-left text-md lg:text-lg mb-4">
              <RawHtml.div>{data?.description}</RawHtml.div>
            </div>

            <hr className="w-full h-1 my-2 bg-white" />

            {/* blog details */}
            <div className="w-full flex flex-col gap-2 my-8 text-left">
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">State :</span> {data?.state}
              </p>
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">Town :</span> {data?.city}
              </p>
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">Gender :</span> {data?.gender}
              </p>
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">Age :</span> {data?.age}
              </p>
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">Vaccinated :</span>{" "}
                {data?.vaccinated}
              </p>
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">Owner :</span>{" "}
                {data?.owner?.firstName} {data?.owner?.lastName}
              </p>
              <p className="text-lg lg:text-xl w-full">
                <span className="font-bold">Contact :</span>{" "}
                <a
                  href={`mailto:${data?.owner?.email}`}
                  className="text-blue-100"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pet;
