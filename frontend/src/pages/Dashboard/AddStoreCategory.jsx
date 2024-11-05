import React, { useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { CategoryFom } from "../../components";
const AddStoreCategory = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
      <div>
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
          Store Category 🛍️
        </h1>
      </div>

      <div>
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true);
            }}
            className="hover:scale-95 transition-transform px-4 py-2 bg-blue-200 text-white font-poppins rounded"
          >
            Add Category
          </button>
        )}
      </div>

      <div>
        {showForm ? (
          <div>
            <h2
              className="my-2"
              onClick={() => {
                setShowForm(false);
              }}
            >
              Back
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
                  placeholder="Search a Category.."
                />
                <button className="w-[10%] text-center bg-blue-200 font-bold rounded-r">
                  Enter
                </button>
              </div>
            </div>

            {/* Card todo : make it as component */}
            <div>
              <div className="flex items-center justify-between p-2 rounded my-4 bg-richblack-800">
                <div>Image</div>

                <div>
                  <p>Title : abc</p>
                  <p>Description : abc</p>
                </div>
                <div>
                  <p>Created : abc</p>
                  <p>Updated : abc</p>
                </div>

                <div className="flex gap-6 items-center">
                  <button>View</button>
                  <button>
                    <MdEdit />
                  </button>
                  <button>
                    <IoTrashBinSharp />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 rounded my-4 bg-richblack-800">
                <div>Image</div>

                <div>
                  <p>Title : abc</p>
                  <p>Description : abc</p>
                </div>
                <div>
                  <p>Created : abc</p>
                  <p>Updated : abc</p>
                </div>

                <div className="flex gap-6 items-center">
                  <button>View</button>
                  <button>
                    <MdEdit />
                  </button>
                  <button>
                    <IoTrashBinSharp />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddStoreCategory;
