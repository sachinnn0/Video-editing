import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full bg-red-500 h-96 overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/sZamsqQdYWU?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=sZamsqQdYWU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZsenEZ-bGdE?si=UH1QN95ppED0ZhI1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <img
            className="mix-blend-multiply"
            src="src/assets/Phone.png"
            alt=""
          />
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8cEySbqBfbU?si=UUy3oMR3KWUHJhvn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_QQPkueyBOo?si=G-P2T6Jq8Aj3EbeX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/WPRrNvqnk0E?si=8hZOoON6vD6pVjyS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="bg-black-500 w-full flex justify-center gap-28 mt-20">
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dIPoAGenSNY?si=hWYmodLhI9xRuLUQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PB7fEOsYX0Q?si=6m_j9oLdHTLPsqNv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-52 h-96 bg-neutral-500 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7wItHGbQEfo?si=MkHmuGr_nbVYMDPy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hero;
