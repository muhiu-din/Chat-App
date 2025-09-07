"use client";
import React from "react";

const Page = () => {
  const topics = [
    {
      text: "Python",
      desc: "Discuss everything about Python programming, from basics to advanced topics.",
      img: "https://example.com/python.png",
    },
    {
      text: "JavaScript",
      desc: "The language of the web! React, Next.js, or just plain JS magic. Beginners and pros welcome.",
      img: "https://example.com/javascript.png",
    },
    {
      text: "C++",
      desc: "From competitive programming to sharpening your problem-solving skills.",
      img: "https://example.com/cpp.png",
    },
    {
      text: "Machine Learning",
      desc: "Dive into ML concepts, frameworks like TensorFlow and discuss the future of AI.",
      img: "https://example.com/ml.png",
    },
    {
      text: "Web Development",
      desc: "Frontend, backend, fullstack — discuss HTML, CSS, Tailwind, Node.js, and all things web.",
      img: "https://example.com/webdev.png",
    },
    {
      text: "Cybersecurity",
      desc: "From ethical hacking to secure coding practices, share knowledge & tools.",
      img: "https://example.com/cybersecurity.png",
    },
    {
      text: "Mobile Apps",
      desc: "Talk about iOS, Android, Flutter, React Native — from UI design tips to performance optimization.",
      img: "https://example.com/mobile.png",
    },
    {
      text: "DevOps",
      desc: "CI/CD, Docker, Kubernetes, cloud infra — learn how to ship faster and keep systems reliable.",
      img: "https://example.com/devops.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black min-h-screen flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-tight text-center drop-shadow-lg">
        💬 Discussion Forums
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-6xl">
        {topics.map((topic) => (
          <div
            key={topic.text}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={topic.img}
              alt={topic.text}
              className="w-full h-34 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-56">
              <h2 className="text-2xl font-bold text-white mb-3">
                {topic.text}
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed line-clamp-4">
                {topic.desc}
              </p>
              <button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:from-purple-600 hover:to-indigo-600 transition-colors">
                Join Discussion →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
