import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import breed1 from "../../assets/breed1.png";
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
// import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  useEffect(() => {
    handleScrollToTop();
  }, []);

  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
    <button className="mx-10 mt-5 flex gap-2 items-center hover:text-[#2d42bb]" onClick={goBack}><IoIosArrowBack /> Back</button>
    <div className=" flex flex-col items-center mx-60 my-10">
      {/* blog title  */}
      <div className="mb-4">
        <h1 className="text-5xl font-bold text-center">
          Title you should destructure the useEffect
        </h1>
      </div>

      <div className="mb-10 text-center">
        {/* blog author */}
        <p className="text-base text-center text-gray-600 text-[#b4b4b4]">
          Written By Naonidh Singh
        </p>
        <p className="text-[gray]">9 days ago</p>
      </div>
      {/* blog Image */}
      <div className="w-[50rem] h-[30rem] overflow-hidden rounded-lg mb-10">
        <img src={breed1} className="w-full h-full object-cover" />
      </div>

      {/* blog Description */}
      <div className="mb-10">
        <p>
          Origin and history of dogs Ancestry Paleontologists and archaeologists
          have determined that about 60 million years ago a small mammal, rather
          like a weasel, lived in the environs of what are now parts of Asia. It
          is called Miacis, the genus that became the ancestor of the animals
          known today as canids: dogs, jackals, wolves, and foxes. Miacis did
          not leave direct descendants, but doglike canids evolved from it. By
          about 30 to 40 million years ago Miacis had evolved into the first
          true dog—namely, Cynodictis. This was a medium-size animal, longer
          than it was tall, with a long tail and a fairly brushy coat. Over the
          millennia Cynodictis gave rise to two branches, one in Africa and the
          other in Eurasia. The Eurasian branch was called Tomarctus and is the
          progenitor of wolves, dogs, and foxes. Genetic evidence suggests that
          dogs descended directly from wolves (Canis) and that the now-extinct
          wolf lineages that produced dogs branched off from the line that
          produced modern living wolves sometime between 27,000 and 40,000 years
          ago. The timing and location of dog domestication is a matter of
          debate. There is strong genetic evidence, however, that the first
          domestication events occurred somewhere in northern Eurasia between
          14,000 and 29,000 years ago. In this region wolves likely facilitated
          their own domestication by trailing nomadic people in northern Eurasia
          and consuming the remains of game animals that hunters left behind.
          Mute swan with cygnet. (birds) Britannica Quiz Match the Baby Animal
          to Its Mama Quiz Most studies agree that domestication was not a
          single discrete event. It was a p
        </p>
      </div>

      {/* blog buttons  */}
      <div className="flex items-start justify-end  gap-4 text-xl  w-full">
        <button onClick={handleLike} className="flex flex-col items-center ">
          {liked ? (
            <FaHeart className="text-[red] transform transition-transform duration-100 hover:scale-125" />
          ) : (
            <FaRegHeart className="transform transition-transform duration-100 hover:scale-125" />
          )}
          <p className="text-[gray] text-base">0</p>
        </button>
        <button className="transform transition-transform duration-100 hover:scale-125 ">
          <FaRegStar />
        </button>
        <button className="transform transition-transform duration-100 hover:scale-125 ">
          <RiShare2Line />
        </button>
      </div>

      {/* scroll to top button  */}
      {/* <button className="fixed right-10 bottom-10 rounded-full text-2xl p-3 bg-black z-[1000]" onClick={handleScrollToTop}><IoIosArrowUp /></button> */}
    </div>
    </>
  );
};

export default BlogDetail;
