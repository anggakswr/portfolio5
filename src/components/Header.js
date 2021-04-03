import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="md:flex justify-center items-center">
      {/* photo */}
      <img
        src="/img/angga.jpeg"
        alt="anggas-profile"
        className="block m-auto"
      />

      {/* text */}
      <div className="px-8">
        {/* name */}
        <h1 className="text-5xl py-8 text-white">Kamiswara Angga Wijaya</h1>

        {/* description */}
        <p>
          Hello, you can call me Angga. I love learning programming, playing
          games, jogging and playing table tennis. I am currently working as a
          front-end developer.
        </p>

        {/* social media icons */}
        <div className="py-8 flex">
          <IconContext.Provider
            value={{
              className: "mr-2 text-white hover:text-gray-300",
              size: "2rem",
            }}
          >
            <a href="https://www.instagram.com/anggakswr/">
              <FaInstagram />
            </a>
            <a href="https://github.com/anggakswr/">
              <FaGithub />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Header;
