import React from "react";
import { FaVuejs, FaReact } from "react-icons/fa";
import { SiNuxtDotJs, SiTailwindcss, SiBulma } from "react-icons/si";
import { IconContext } from "react-icons";

const Content = () => {
  return (
    <div className="py-32">
      <h2 className="text-3xl py-2 px-8 mb-5">Recent Works</h2>

      <ul className="ml-5 list-disc">
        <li className="p-5 relative">
          <div
            className="w-0.5 h-full absolute bg-white top-14 -left-3"
            style={{ height: "90%" }}
          />

          <h2 className="text-3xl text-white mb-4 block">
            MAMI Mutual Funds Site + CMS
          </h2>

          <img
            src="https://anggakswr.github.io/img/recent-works/manulife.jpg"
            alt="manulife-home-page"
          />

          <div className="flex gap-x-2 justify-center items-center mt-5">
            <IconContext.Provider
              value={{
                size: "2rem",
              }}
            >
              <FaVuejs title="Vue JS Logo" />
              <SiNuxtDotJs title="Nuxt JS Logo" />
              <SiTailwindcss title="Tailwind CSS Logo" />
            </IconContext.Provider>
          </div>

          <p className="mt-5">
            A website that provides information on various investment products
            from Manulife Investment Management uses Vue JS and Nuxt JS to
            handle SEO and simplify routing, and Tailwind CSS as the CSS
            framework.
          </p>
        </li>

        <li className="p-5 relative">
          <div
            className="w-0.5 h-full absolute bg-white top-14 -left-3"
            style={{ height: "90%" }}
          />

          <a
            href="https://meeting.bppt.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white mb-4 block"
          >
            BPPT Teleconference
          </a>

          <img
            src="https://anggakswr.github.io/img/recent-works/bppt.png"
            alt="bppt-login-page"
          />

          <div className="flex gap-x-2 justify-center items-center mt-5">
            <IconContext.Provider
              value={{
                size: "2rem",
              }}
            >
              <FaReact title="React JS Logo" />
              <SiBulma title="Bulma CSS Logo" />
            </IconContext.Provider>
          </div>

          <p className="mt-5">
            An online meeting application that uses an open-source technology
            called Jitsi which is integrated with React JS and Bulma CSS as a
            CSS framework.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Content;
