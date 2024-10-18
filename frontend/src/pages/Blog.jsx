import React, { useEffect, useState } from "react";
import { BlogInput, BlogCard } from "../components";
import pug from "../assets/pug.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../slices/blogSlice";
import { getBlogsPagination } from "../services/operations/blog";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { page, allBlogs: blogs } = useSelector((state) => state.blog);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getBlogsPagination(
        {
          page: page,
        },
        token,
        setLoading
      )
    );
  }, [page]);

  return (
    <div className="max-w-[1440px] mx-auto py-8 px-4 space-y-12">
      <BlogInput />

      <div>
        {loading === true && (
          <div className="w-full font-poppins text-center py-[80px]">
            Loading...
          </div>
        )}
      </div>

      <div>
        {loading === false && blogs.length === 0 && (
          <div className="w-full font-poppins text-center py-[80px]">
            No blogs found.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((data, index) => (
          <BlogCard key={index} data={data} />
        ))}
      </div>

      {/* Todo : pagination */}
      <div className="w-full flex justify-end py-4">
        <div className="flex items-center gap-[35px]">
          <div>
            {page > 1 && (
              <button
                onClick={() => {
                  dispatch(setPage(page - 1));
                  window.scrollTo(0,0)
                }}
                className="flex items-center gap-2 bg-blue-300 px-2 py-2 rounded-sm"
              >
                <FaCaretLeft /> <span>Prev</span>
              </button>
            )}
          </div>
          <p>{page}</p>

          {blogs.length !== 0 && (
            <button
              onClick={() => {
                dispatch(setPage(page + 1));
                window.scrollTo(0,0)
              }}
              className="flex items-center gap-2 bg-blue-300 px-2 py-2 rounded-sm"
            >
              <span>Next</span> <FaCaretRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
