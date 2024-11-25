import React, { useEffect, useState } from "react";
import Filter from "../components/Store/Filter";
import PetCard from "../components/Adoption/PetCard";
import { useDispatch, useSelector } from "react-redux";
import { LoadingTwo } from "../components";
import { FaGlobeAmericas } from "react-icons/fa";
import states from "../utils/statesData";
import { setLoaction } from "../slices/locationSlice";
import { getPetInfos } from "../services/operations/adopt";

const Adopt = () => {
  const { state } = useSelector((state) => state.location);
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loc, setLoc] = useState("Delhi");
  const [data, setData] = useState(null);

  useEffect(() => {
    dispatch(getPetInfos({ state: state }, token, setData, setLoading));
  }, [state]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <LoadingTwo />
      </div>
    );
  }

  if (state === null) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <select
          value={state || loc}
          onChange={(e) => {
            setLoc(e.target.value);
          }}
          className="bg-richblack-800 text-white  py-2 px-4 rounded"
        >
          {states.map((data, index) => (
            <option value={data.name} key={index}>
              {data.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            console.log(loc);
            localStorage.setItem("state", loc);
            dispatch(setLoaction(loc));
          }}
          className="py-2 px-4 bg-blue-300 text-white font-poppins rounded flex justify-between items-center gap-2"
        >
          <FaGlobeAmericas /> Select state
        </button>
      </div>
    );
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto">
      {/* Banner */}
      <div className="py-[25px] font-poppins font-bold">
        <h1 className="text-2xl sm:text-3xl">
          {`Hi ${user.firstName}`} <span className="">👋</span>
        </h1>
      </div>
      <div className="flex items-center justify-between  flex-wrap mb-4">
        <h2>Location : {state}</h2>
        <button
          onClick={() => {
            dispatch(setLoaction(null));
            localStorage.setItem("state", null);
          }}
          className="p-2 rounded bg-blue-300 text-white my-4 mx-auto sm:mx-0"
        >
          Change Location
        </button>
      </div>

      <hr className="py-4 shadow-sm rounded" />

      {/* Pets */}
      <div className="mb-4">
        {data === null || data.length === 0 ? (
          <div className="text-center text-xl font-poppins">
            Sorry, no pets were found in your area
          </div>
        ) : (
          <div>
            {data && data.length > 0 && (
              <div className="flex gap-[35px] flex-wrap justify-evenly">
                {data.map((pet, index) => (
                  <PetCard data={pet} index={index} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Adopt;
