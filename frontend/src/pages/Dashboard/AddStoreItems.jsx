import React, { useState, useEffect } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { ItemForm } from "../../components";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import LoadingTwo from "../../components/Spinner/LoadingTwo";
import { getItemDash, getItemByName,deleteItem } from "../../services/operations/store";
import { useDispatch, useSelector } from "react-redux";

const ItemCard = ({ data, index, setLoading, setData, token }) => {
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
          {`${data?.title?.substr(0, 20)}...`}
        </p>
      </div>
      <div>
        <p>
          <span className="font-semibold">
            Created : {data?.createdAt.split("T")[0]}
          </span>{" "}
        </p>
        <p>
          <span className="font-semibold"></span>
        </p>
      </div>

      <div className="flex gap-6 items-center">
        <button>
          <MdEdit />
        </button>
        <button
          onClick={() => {
            dispatch(
              deleteItem(
                {
                  itemId : data._id,
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

const AddStoreItems = () => {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getItemDash(setLoading, setData, token));
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
          Store Items 🛍️
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
              Add Item
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
            <ItemForm />
          </div>
        ) : (
          <div>
            <div className="">
              {/* Search item */}
              <h2 className="my-4">Search Item</h2>
              <div className="flex shadow-md shadow-richblack-600">
                <input
                  className="w-[90%] rounded-l font-roboto p-2 font-xl outline-none text-black"
                  type="text"
                  placeholder="Search a Item"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      getItemByName(
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
                    <ItemCard
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

export default AddStoreItems;
