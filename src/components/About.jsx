import React from "react";

const About = () => {
  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5 text-center">About Dramas 🎭</h1>
      <p className="text-lg text-gray-300 max-w-3xl text-center">
        Welcome to our drama collection! We bring you the best dramas from around the world, featuring captivating 
        stories, outstanding performances, and emotional depth. Whether you love intense thrillers, heartfelt romances, 
        or historical epics, we have something for everyone.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Why Watch Dramas?</h2>
        <ul className="list-disc list-inside text-gray-400 text-lg">
          <li>🎭 Engaging Storylines</li>
          <li>🌍 Cultural Exploration</li>
          <li>🎬 High-Quality Productions</li>
          <li>💖 Emotional Connections</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Our Collection Includes:</h2>
        <ul className="list-disc list-inside text-gray-400 text-lg">
          <li>📺 Latest Trending Dramas</li>
          <li>🏆 Award-Winning Classics</li>
          <li>🌟 Fan-Favorite Series</li>
          <li>🎞️ Hidden Gems</li>
        </ul>
      </div>

      <p className="text-lg text-gray-300 max-w-3xl text-center mt-8">
        Explore our drama collection and immerse yourself in incredible storytelling. Enjoy the best dramas with us! 🎭✨
      </p>
    </div>
  );
};

export default About;
