import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full bg-red-500 h-96">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center"
            src="src/assets/Long Videos/Poster.mp4"
          ></video>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center mt-20">
        <h1 className="text-9xl">Sachin Vishwakarma</h1>
        <h2 className="text-3xl mt-3">
          Video Editor and Motion Graphics Designer
        </h2>
        <button className="px-6 py-3 rounded-full bg-neutral-700 text-white mt-10">
          <a href="mailto:sachinvishwakarma2215@gmail.com" target="_blank">
            TALK TO US
          </a>
        </button>
      </div>
      <div className="bg-black-500 w-full flex gap-28 justify-center mt-20">
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay 
            loop
            muted
            className="h-screen w-full object-cover bg-gray-500"
            src="src/assets/Short Videos/Video1.mp4"
          ></video>
          <img className="mix-blend-multiply" src="src/assets/Phone.png" alt="" />
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="src/assets/Short Videos/Video2.mp4"
          ></video>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="src/assets/Short Videos/Video3.mp4"
          ></video>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="src/assets/Short Videos/Video4.mp4"
          ></video>
        </div>
      </div>
      <div className="bg-black-500 w-full flex justify-center gap-28 mt-20">
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="src/assets/Short Videos/Video5.mp4"
          ></video>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="src/assets/Short Videos/Video6.mp4"
          ></video>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="src/assets/Short Videos/Video7.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
