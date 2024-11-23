import React, { useEffect, useState } from "react";
import DashboardChart from "./DashboardChart";
import LoadingTwo from "../../components/Spinner/LoadingTwo";
import { useDispatch, useSelector } from "react-redux";
import { getStoreDetails } from "../../services/operations/store";

const StoreDashboard = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [dogs, setDogs] = useState(0);
  const [cats, setCats] = useState(0);

  console.log(token);

  useEffect(() => {
    dispatch(getStoreDetails(setLoading, setData,setDogs,setCats, token));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto h-full w-11/12 max-w-[1000px] py-10 flex items-center justify-center">
        <LoadingTwo />
      </div>
    );
  } else if (data === null) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <div>
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-richblack-5">
                Hi Admin 👋
              </h1>
              <p className="font-medium text-richblack-200">
                Let's start something new
              </p>
            </div>
            <div className="my-4 flex flex-col-reverse  gap-3 md:flex-row md:flex md:h-[450px] md:space-x-4">
              <div className="flex flex-col flex-1 rounded-md bg-richblack-800 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-richblack-5">
                    Visualize Store categories
                  </p>
                  <div className="flex items-center space-x-4"></div>
                </div>
                <DashboardChart details={data} />
              </div>
              <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Statistics</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-lg text-richblack-200">Total Pets</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      {dogs + cats}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-200">Total Dogs</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      {dogs}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-200">Total Cats</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      {cats}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;
