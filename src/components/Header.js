import React from "react";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="md:flex justify-center">
      {/* photo */}
      <div>
        <img
          src="https://anggakswr.github.io/img/angga.jpg"
          alt="anggas-profile"
          className="block w-full"
        />
      </div>

      {/* text */}
      <div className="px-8">
        {/* name */}
        <h1 className="text-5xl pb-8 text-white">Kamiswara Angga Wijaya</h1>

        {/* description */}
        <p>
          Hello, I'm a front-end web developer who loves to create my own world
          through programming.
        </p>

        {/* social media icons */}
        <div className="py-8">
          <div className="flex">
            <IconContext.Provider
              value={{
                className: "mr-2",
                size: "2rem",
              }}
            >
              <a
                href="https://www.instagram.com/anggakswr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/anggakswr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.youtube.com/channel/UCNZNdoVIHcOxZ-j2tdE28RA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://tiktok.com/@anggakswr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok size={30} />
              </a>
            </IconContext.Provider>
          </div>

          <p className="mt-2">(+62) 895 0734 0705</p>
          <p className="mt-2">kamiswara98@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
