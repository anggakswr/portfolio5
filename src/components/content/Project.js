const Project = ({ project }) => {
  const { url, title, img, desc, tech } = project;

  return (
    <li className="p-5 relative">
      <div
        className="w-0.5 h-full absolute bg-white top-14 -left-3"
        style={{ height: "90%" }}
      />

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white mb-4 block"
        >
          {title}
        </a>
      ) : (
        <p className="text-3xl text-white mb-4">{title}</p>
      )}

      <img src={img} alt={title} />

      {tech}

      <p className="mt-5">{desc}</p>
    </li>
  );
};

export default Project;
