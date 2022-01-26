import React from "react";
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNuxtDotJs, SiTailwindcss, SiBulma, SiMongodb } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { IconContext } from "react-icons";

const Content = () => {
  return (
    <div className="py-32">
      <h2 className="text-3xl text-center py-2 mb-5">Recent Works</h2>

      <ul className="ml-5 list-disc">
        <li className="p-5 relative">
          <div className="w-0.5 h-full absolute bg-white top-14 -left-3" style={{ height: "90%" }} />

          <a href="https://reksadana-manulife.com/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white mb-4 block">
            MAMI Mutual Funds Site + CMS
          </a>

          <img src="https://anggakswr.github.io/img/recent-works/manulife.jpg" alt="manulife-home-page" />

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

          <p className="mt-5">A website that provides information on various investment products from Manulife Investment Management uses Vue JS and Nuxt JS to handle SEO and simplify routing, and Tailwind CSS as the CSS framework.</p>
        </li>

        <li className="p-5 relative">
          <div className="w-0.5 h-full absolute bg-white top-14 -left-3" style={{ height: "90%" }} />

          <a href="https://meeting.bppt.go.id/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white mb-4 block">
            BPPT Teleconference
          </a>

          <img src="https://anggakswr.github.io/img/recent-works/bppt.png" alt="bppt-login-page" />

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

          <p className="mt-5">An online meeting application that uses an open-source technology called Jitsi which is integrated with React JS and Bulma CSS as a CSS framework.</p>
        </li>

        <li className="p-5 relative">
          <div className="w-0.5 h-full absolute bg-white top-14 -left-3" style={{ height: "90%" }} />

          <h2 className="text-3xl text-white mb-4 block">Social Media Scraping Site</h2>

          <img src="https://anggakswr.github.io/img/recent-works/fas.jpg" alt="fas-scraping-site" />

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

          <p className="mt-5">Social media scraping site, I work as a part of the front-end team. Build with Nuxt JS and Tailwind CSS. This app shows informations like total followers, account growth and etc.</p>
        </li>

        <li className="p-5 relative">
          <div className="w-0.5 h-full absolute bg-white top-14 -left-3" style={{ height: "90%" }} />

          <a href="https://www.instagram.com/p/CGwTqy3H4LS/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white mb-4 block">
            React Native Inventory App
          </a>

          <img src="https://anggakswr.github.io/old-portfolio/img/projects/inventoryq.jpg" alt="react-native-mobile-app" />

          <div className="flex gap-x-2 justify-center items-center mt-5">
            <IconContext.Provider
              value={{
                size: "2rem",
              }}
            >
              <FaReact title="React Native Logo" />
            </IconContext.Provider>
          </div>

          <p className="mt-5">To manage goods, sales, expenditure, and stocks. Made by React Native, Firebase for the DBMS, and React Native Paper for the UI design.</p>
        </li>

        <li className="p-5 relative">
          <div className="w-0.5 h-full absolute bg-white top-14 -left-3" style={{ height: "90%" }} />

          <a href="https://www.instagram.com/p/CAX3tW-n_ua/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white mb-4 block">
            Campus Information System
          </a>

          <img src="https://anggakswr.github.io/old-portfolio/img/projects/iasolv2.jpg" alt="codeigniter-web-app" />

          <div className="flex gap-x-2 justify-center items-center mt-5">
            <IconContext.Provider
              value={{
                size: "2rem",
              }}
            >
              <DiCodeigniter title="CodeIgniter Logo" />
            </IconContext.Provider>
          </div>

          <p className="mt-5">Built with CodeIgniter 3. For student registration, fill out courses schedule, and managing grades. Email verification included for forgot password feature.</p>
        </li>

        <li className="p-5 relative">
          <div className="w-0.5 h-full absolute bg-white top-14 -left-3" style={{ height: "90%" }} />

          <a href="http://119.82.240.113/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white mb-4 block">
            Lecturer Management Information System
          </a>

          <img src="https://anggakswr.github.io/old-portfolio/img/projects/simdos.png" alt="nuxtjs-pwa-app" />

          <div className="flex gap-x-2 justify-center items-center mt-5">
            <IconContext.Provider
              value={{
                size: "2rem",
              }}
            >
              <FaNodeJs title="Node JS Logo" />
              <SiMongodb title="Mongo DB Logo" />
              <FaVuejs title="Vue JS Logo" />
              <SiNuxtDotJs title="Nuxt JS Logo" />
              <SiTailwindcss title="Tailwind CSS Logo" />
            </IconContext.Provider>
          </div>

          <p className="mt-5">Built with Nuxt JS and Tailwind CSS. For managing lecturer data such as ID card, graduation letter, etc. I also build the backend using Node JS and Mongo DB.</p>
        </li>
      </ul>
    </div>
  );
};

export default Content;
