import React, { useEffect } from "react";
import "./TextShpere.css"

import TagCloud from "TagCloud";

export const TextShpere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "ANGULAR",
        "EXPRESS",
        "SASS",
        "JavaScript",
        "React",
        "FLUTTER",
        "SQL",
        "MYSQL",
        "SQLITE",
        "PYTHON",
        "C",
        "C#",
        "C++",
        "JAVA",
        "PHP",
        "LARAVEL",
        "DJANGO",
        "SWIFT",
        "KOTLIN",
        "DART",
        "REACT NATIVE",
        "FIREBASE",
        "MONGODB",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "TAILWIND"
      ];

      const options = {
        radius: 700,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);


  return (
    <>
      <div className="text-shpere w-full h-auto inset-0 z-[-1]">
          <span className="tagcloud"></span>
      </div>
    </>
  );
}

