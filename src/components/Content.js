import React from "react";
import { FaReact } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { IconContext } from "react-icons";
import Project from "./content/Project";

const Content = () => {
  return (
    <div className="py-32">
      <h2 className="text-3xl text-center py-2 mb-5">Recent Works</h2>

      <ul className="ml-5 list-disc">
        {projects.map((project) => (
          <Project key={project.img} project={project} />
        ))}
      </ul>
    </div>
  );
};

const projects = [
  {
    title: "Parenthood Institute",
    img: "https://anggakswr.github.io/img/recent-works/parenthood.jpg",
    desc: "Webview app. Some events that PrimaKu have, related with child health education.",
  },
  {
    title: "CDIC",
    img: "https://anggakswr.github.io/img/recent-works/cdic.jpg",
    desc: "Webview consultation app. This app can be used to consult between pediatricians and parents.",
  },
  {
    url: "https://worxspace.id/",
    title: "Worxspace",
    img: "https://anggakswr.github.io/img/recent-works/worxspace.png",
    desc: "Corporate instant messaging app, there are web app and mobile app. This app can manage tasks, timeline, files, employee schedule, and many more.",
  },
  {
    url: "https://reksadana-manulife.com/",
    title: "MAMI Mutual Funds Site + CMS",
    img: "https://anggakswr.github.io/img/recent-works/manulife.jpg",
    desc: "A website that provides information on various investment products from Manulife Investment Management.",
  },
  {
    url: "https://meeting.bppt.go.id/",
    title: "BPPT Teleconference",
    img: "https://anggakswr.github.io/img/recent-works/bppt.png",
    desc: "An online meeting application similar to Zoom.",
  },
  {
    title: "Social Media Scraping Site",
    img: "https://anggakswr.github.io/img/recent-works/fas.jpg",
    desc: "Social media scraping site, I work as a part of the front-end team. This app shows informations like total followers, account growth and etc.",
  },
  {
    url: "https://www.instagram.com/p/CGwTqy3H4LS/",
    title: "React Native Inventory App",
    img: "https://anggakswr.github.io/old-portfolio/img/projects/inventoryq.jpg",
    desc: "To manage goods, sales, expenditure, and stocks. Made by React Native, Firebase for the DBMS, and React Native Paper for the UI design.",
    tech: (
      <div className="flex gap-x-2 justify-center items-center mt-5">
        <IconContext.Provider
          value={{
            size: "2rem",
          }}
        >
          <FaReact title="React Native Logo" />
        </IconContext.Provider>
      </div>
    ),
  },
  {
    url: "https://www.instagram.com/p/CAX3tW-n_ua/",
    title: "Campus Information System",
    img: "https://anggakswr.github.io/old-portfolio/img/projects/iasolv2.jpg",
    desc: "Built with CodeIgniter 3. For student registration, fill out courses schedule, and managing grades. Email verification included for forgot password feature.",
    tech: (
      <div className="flex gap-x-2 justify-center items-center mt-5">
        <IconContext.Provider
          value={{
            size: "2rem",
          }}
        >
          <DiCodeigniter title="CodeIgniter Logo" />
        </IconContext.Provider>
      </div>
    ),
  },
  {
    title: "Lecturer Management Information System",
    img: "https://anggakswr.github.io/img/recent-works/simdos.png",
    desc: "For managing lecturer data such as ID card, graduation letter, etc. I also build the backend because in this project, I work as a freelancer.",
  },
];

export default Content;
