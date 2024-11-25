import React, { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { CategoryFom } from "../../components";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { getCatDash } from "../../services/operations/store";
import { useDispatch, useSelector } from "react-redux";
import LoadingTwo from "../../components/Spinner/LoadingTwo";
import { getCatByName, deleteCategory } from "../../services/operations/store";

const CatCard = ({ data, index, setLoading, setData, token }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={index}
      className="flex items-center justify-between p-2 rounded my-4 bg-richblack-800"
    >
      <img
        src={data?.thumbnail}
        alt="cat_image"
        className="w-[80px] h-[80px] object-cover"
      />

      <div>
        <p>
          <span className="font-semibold">Title : </span>
          {data?.title}
        </p>
      </div>
      <div>
        <p>
          <span className="font-semibold">Created : </span>{" "}
          {data?.createdAt.split("T")[0]}
        </p>
        <p>
          <span className="font-semibold">
            Updated : {data?.updatedAt.split("T")[0]}
          </span>
        </p>
      </div>

      <div className="flex gap-6 items-center">
        <button>
          <MdEdit />
        </button>
        <button
          onClick={() => {
            dispatch(
              deleteCategory(
                {
                  categoryId: data._id,
                },
                setLoading,
                setData,
                token
              )
            );
          }}
        >
          <IoTrashBinSharp />
        </button>
      </div>
    </div>
  );
};

const AddStoreCategory = () => {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCatDash(setLoading, setData, token));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto h-full w-11/12 max-w-[1000px] py-10 flex items-center justify-center">
        <LoadingTwo />
      </div>
    );
  }

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
      <div className="flex justify-between">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
          Store Category 🛍️
        </h1>
        <div>
          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
              }}
              className="hover:scale-95 flex items-center gap-4 transition-transform px-4 py-2 bg-blue-200 text-white font-poppins rounded"
            >
              <IoMdAdd />
              Add Category
            </button>
          )}
        </div>
      </div>

      <div>
        {showForm ? (
          <div>
            <h2
              className="my-2 flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setShowForm(false);
              }}
            >
              <IoChevronBackCircleSharp className="text-xl" /> Back
            </h2>
            <CategoryFom />
          </div>
        ) : (
          <div>
            <div className="">
              {/* Search item */}
              <h2 className="my-4">Search Category</h2>
              <div className="flex shadow-md shadow-richblack-600">
                <input
                  className="w-[90%] rounded-l font-roboto p-2 font-xl outline-none text-black"
                  type="text"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  placeholder="Search a Category.."
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      getCatByName(
                        {
                          name: query,
                        },
                        setLoading,
                        setData,
                        token
                      )
                    );
                  }}
                  className="w-[10%] text-center bg-blue-200 font-bold rounded-r"
                >
                  Enter
                </button>
              </div>
            </div>

            {/* Card todo : make it as component */}
            <div>
              {data && (
                <div>
                  {data?.map((cat, index) => (
                    <CatCard
                      index={index}
                      token={token}
                      setLoading={setLoading}
                      data={cat}
                      setData={setData}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddStoreCategory;
