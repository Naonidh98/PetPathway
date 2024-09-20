import React, { useEffect, useState } from "react";
import { BlogInput, BlogCard } from "../components";
import pug from "../assets/pug.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(Array(20).fill());
  }, []);

  return (
    <div className="mx-auto py-8 px-4 space-y-12">
      <BlogInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((el, index) => (
          <BlogCard
            key={index}
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
            author="John Doe"
            date="Sep 14, 2024"
            image={pug}
            likes={3}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
