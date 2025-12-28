import { useLang } from "../context/LanguageContext";

type Project = {
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
};

export default function Projects() {
  const { t, lang } = useLang();

  const projects: Project[] = [
    {
      tech: ["React", "Tailwind", "Firebase", "TypeScript"],
      image: "https://via.placeholder.com/400",
      github: "https://github.com/username/qr-menu",
      live: "https://taj-res-menu.vercel.app/",
    },
    {
      tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
      image: "https://via.placeholder.com/400",
      github: "https://github.com/username/admin-dashboard",
      live: "https://admin-dashboard.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 transition-colors duration-500"
    >
      <h2
        className={`text-5xl font-extrabold mb-12 text-gray-900 dark:text-white font-[Lemonada]
        ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        {t.projects.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 hover:-translate-y-2 hover:scale-105 transition-all duration-500"
          >
            {project.image && (
              <img
                src={project.image}
                alt={t.projects.items[idx].name}
                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
              />
            )}

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-500">
              {t.projects.items[idx].name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-3 transition-colors duration-500">
              {t.projects.items[idx].description}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  {t.projects.github}
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition"
                >
                  {t.projects.live}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
