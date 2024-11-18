import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBlogs } from "../../services/operations/blog";
import moment from "moment";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LoadingTwo } from "../../components";
import { deleteUserBlog } from "../../services/operations/blog";

const MyBlogCard = ({ data, key, setMyBlogs, setLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  return (
    <div key={key}>
      {/* section Blog Card */}
      <div className="my-[25px] flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate(`/blog/${data?._id}`);
          }}
        >
          {`${data.title.substr(0, 30)}...`}
        </p>

        <p className="flex flex-col gap-2 justify-center">
          <div className="text-center">{`created  : ${
            data?.createdAt.split("T")[0]
          }`}</div>
          <div className="text-center">{`edited  : ${
            data?.updatedAt.split("T")[0]
          }`}</div>
        </p>

        <div className="text-center">{`likes  : ${data?.likes.length}`}</div>

        <p className="cursor-pointer text-xl flex gap-[25px] items-center">
          <button onClick={()=>{
            navigate(`/blog/edit/${data?._id}`);
            window.scroll(0,0);
          }}>
            <MdEdit />
          </button>
          <button
            onClick={() => {
              dispatch(
                deleteUserBlog(
                  {
                    blogId: data?._id,
                  },
                  token,
                  setMyBlogs
                )
              );
            }}
          >
            <IoTrashBinSharp />
          </button>
        </p>
      </div>
    </div>
  );
};

const MyBlogs = () => {
  const { user, token } = useSelector((state) => state.user);
  const [myBlogs, setMyBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserBlogs(token, setMyBlogs, setLoading));
  }, []);

  useEffect(() => {
    console.log("myBogs", myBlogs);
  }, [myBlogs]);

  if (loading) {
    return (
      <div className="h-[450px] flex items-center justify-center">
        <LoadingTwo />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
        <div className="">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            My Blogs
          </h1>

          <div>
            {myBlogs?.length === 0 ? (
              <div>No Blog Created</div>
            ) : (
              <div>
                {myBlogs.map((data, index) => (
                  <MyBlogCard data={data} key={index} setMyBlogs={setMyBlogs} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
