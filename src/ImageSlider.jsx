import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { data } from "../constant";

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handlenext = () => {
    return setActiveImage((activeImage + 1) % data.length);
  };

  const handleprevious = () => {
    return setActiveImage(!activeImage ? data.length - 1 : activeImage - 1);
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      handlenext();
    }, 3000);
    return () => {
      clearTimeout(Timer);
    };
  }, [activeImage]);

  return (
    <>
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Image Slider
      </h1>

      <div className="flex justify-center">
        <button onClick={handleprevious}>
          <svg
            class="h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>

        {data.map((url, i) => (
          <img
            className={
              "h-[500px] w-[700px] rounded-lg object-contain " +
              (activeImage === i ? "block" : "hidden")
            }
            src={url}
            alt="image description"
          />
        ))}

        <button onClick={handlenext}>
          <svg
            class="h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
export default ImageSlider;
