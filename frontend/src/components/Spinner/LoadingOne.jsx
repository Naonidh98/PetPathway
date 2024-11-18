import React from "react";

//dotted spinner

const LoadingOne = () => {
  return (
    <div class="flex space-x-2 justify-center items-center bg-none dark:invert">
      <div class="h-4 w-4 bg-white/75 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-4 w-4 bg-white/75 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-4 w-4 bg-white/75 rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingOne;
