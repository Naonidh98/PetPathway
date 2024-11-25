import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import LoadingTwo from "../components/Spinner/LoadingTwo";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResultData } from "../services/operations/store";

const PetCard = ({ index, data }) => {
  const navigate = useNavigate();

  return (
    <div
      index={index}
      className="text-black relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <a
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="w-full object-cover"
          src={data?.thumbnail}
          alt="product image"
        />
      </a>
      <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900 font-poppins">
            {data?.name}
          </h5>
        </a>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-md font-bold text-slate-900">
              Breed : {data?.breed}
            </span>
          </p>
          <span class="text-md font-bold text-slate-900">
            {data?.state}, {data?.city}
          </span>
        </div>
        <button
          onClick={() => {
            navigate(`/pet/detail/${data._id}`);
          }}
          className="w-full hover:scale-90 transition-transform flex items-center justify-center gap-2 bg-blue-300 text-white rounded p-4"
        >
          Details
        </button>
      </div>
    </div>
  );
};
const ItemCard = ({ index, data }) => {
  const navigate = useNavigate();

  return (
    <div
      index={index}
      className="text-black relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <a
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="w-full object-cover"
          src={data?.thumbnail}
          alt="product image"
        />
      </a>
      <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900 font-poppins">
            {data?.title}
          </h5>
        </a>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-md font-bold text-slate-900">
              Price : Rs. {data?.price}
            </span>
          </p>
        </div>
        <button
          onClick={() => {
            navigate(`/pet/detail/${data._id}`);
          }}
          className="w-full hover:scale-90 transition-transform flex items-center justify-center gap-2 bg-blue-300 text-white rounded p-4"
        >
          Details
        </button>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(200000);
  const [pet, setPet] = useState("Both");
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getSearchResultData(
        {
          min: min.toString(),
          max: max.toString(),
          pet: pet,
          query: params.query,
        },
        setLoading,
        setData,
        token
      )
    );
  }, [params]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoadingTwo />
      </div>
    );
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto h-full py-4">
      <h2 className="font-roboto text-xl italic text-blue-100">
        Search result for {params.query}
      </h2>

      <div>
        {/* Filter */}
        <div className="flex justify-end py-12">
          <button className="flex justify-center gap-2 items-center text-md font-poppins bg-white/90 text-black rounded p-2">
            <FaFilter className="text-[15px]" /> Filter
          </button>
        </div>
        <hr className="w-full text-white/50 my-4 rounded" />
        <div className="font-poppins">
          {/* Pet Type */}
          <div className="flex gap-4 items-center my-[15px]">
            <span className="font-semibold text-xl pr-4">Pet : </span>
            <div className="flex item-center gap-2">
              <label>Dog</label>
              <input
                type="radio"
                onChange={(e) => {
                  setPet(e.target.value);
                }}
                name="groundfloordropdown"
                value={"Dog"}
              />
            </div>
            <div className="flex item-center gap-2">
              <label>Cat</label>
              <input
                type="radio"
                onChange={(e) => {
                  setPet(e.target.value);
                }}
                name="groundfloordropdown"
                value={"Cat"}
              />
            </div>
            <div className="flex item-center gap-2">
              <label>Both</label>
              <input
                type="radio"
                onChange={(e) => {
                  setPet(e.target.value);
                }}
                name="groundfloordropdown"
                value={"Both"}
              />
            </div>
          </div>
          
          <div className="w-full flex items-center my-[15px]">
            <label className="font-semibold text-xl pr-4">Price Range :</label>
            <div className="flex items-center gap-2 flex-wrap">
              <input
                type="number"
                className="bg-richblack-800 text-white p-2 rounded"
                placeholder="Min"
                onChange={(e) => {
                  setMin(e.target.value);
                }}
              />
              <p>To</p>
              <input
                type="number"
                className="bg-richblack-800 text-white p-2 rounded"
                placeholder="Max"
                onChange={(e) => {
                  setMax(e.target.value);
                }}
              />
            </div>
          </div>
  
        </div>
        <div className="flex justify-end gap-8">
          <button
            onClick={() => {
              dispatch(
                getSearchResultData(
                  {
                    min: min.toString(),
                    max: max.toString(),
                    pet: pet,
                    query: params.query,
                  },
                  setLoading,
                  setData,
                  token
                )
              );
            }}
            className="flex justify-center gap-2 items-center text-md font-poppins bg-blue-300 text-white font-bold rounded px-4 py-2"
          >
            Apply
          </button>
        </div>
        <hr className="w-full text-white/50 my-4 rounded" />
      </div>

      {/* Pets */}
      <h2 className="font-poppins text-xl md:text-2xl my-4">
        Pets Related to " {params.query} "
      </h2>
      {data?.pets.length > 0 ? (
        <div>
          <div className="flex flex-wrap gap-4 justify-evenly">
            {data?.pets.map((data, index) => (
              <PetCard index={index} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center flex items-center justify-center font-poppins h-[55px]">
          Sorry, No data found
        </div>
      )}

      <hr className="w-full text-white/50 my-4 rounded" />

      <h2 className="font-poppins text-xl md:text-2xl my-4">
        Items Related to " {params.query} "
      </h2>
      {/* Items */}
      {data?.items.length > 0 ? (
        <div>
          <div className="flex flex-wrap gap-4 justify-evenly">
            {data?.items.map((data, index) => (
              <ItemCard index={index} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center flex items-center justify-center font-poppins h-[55px]">
          Sorry, No data found
        </div>
      )}
    </div>
  );
};

export default SearchResult;
