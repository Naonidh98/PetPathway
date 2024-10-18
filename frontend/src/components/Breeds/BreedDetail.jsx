import React, { useEffect, useState } from "react";
import BreedData from "./BreedData";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const BreedDetail = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [data, setData] = useState(null);
  const [image, setImg] = useState("");

  const fetchDogBreeds = async () => {
    const toastId = toast.loading("loading...");
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${params.type}`
      );
      const response2 = await fetch(
        `https://dog.ceo/api/breed/${params.type}/images/random`
      );
      const cat = await response.json();
      const cat2 = await response2.json();

      setData(cat[0]);

      setImg(cat2.message);

      console.log(cat);

      toast.success("Data fetched");
    } catch (err) {
      console.log("Api error...", err);
      toast.error("Failed");
    }
    setLoading(false);
    toast.dismiss(toastId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDogBreeds();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data === null || data?.length === 0) {
    return <div>No record found</div>;
  }

  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col">
        <div className="bg-gradient-to-b from-richblack-800 to-richblack-900 rounded-b-3xl py-10 h-[250px] text-center">
          <h1 className="font-semibold text-4xl font-poppins py-4">
            {data?.name || params?.type}
          </h1>
          <p>{params?.type}</p>
        </div>
        <div className="flex justify-center -mt-20">
          <div className="w-[450px]">
            <img
              className="w-full object-cover rounded-2xl"
              src={image}
              alt={""}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center w-[100%] mt-10 py-[50px]">
        <div className="w-[70%]">
          <p className="mb-5">{}</p>
          <div className="mb-5">
            <h4 className="font-semibold font-poppins text-xl">
              Average lifespan
            </h4>
            <p>{data?.life_span || "NA"}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold font-poppins text-xl">
              Average height
            </h4>
            <p>{`${data?.height?.metric || "NA"} cm`}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold font-poppins text-xl">
              Average weight
            </h4>
            <p>{`${data?.weight?.metric || "NA"} kg`}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold font-poppins text-xl">
              Breed personality, characteristics & temperament{" "}
            </h4>
            <p>{data?.temperament || "NA"}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold font-poppins text-xl">
              Compatibility with other pets{" "}
            </h4>
            <p>{data?.breed_group || "NA"}</p>
          </div>

          <div className="mb-5">
            <h4 className="font-poppins text-xl font-semibold">
              Ideal owners{" "}
            </h4>
            <p>{data?.bred_for || "NA"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;
