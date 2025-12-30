import { useLang } from "../context/LanguageContext";

type Project = {
  name: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
};

export default function Projects() {
  const { t, lang } = useLang();
  const isArabic = lang === "ar";

  const projects: Project[] = [
    {
      name: t.projects.items[0].name,
      description: t.projects.items[0].description,
      tech: ["React", "Tailwind", "Firebase", "TypeScript"],
      live: "https://taj-res-menu.vercel.app/",
    },
    {
      name: t.projects.items[1].name,
      description: t.projects.items[1].description,
      tech: ["React", "Firebase", "TypeScript", "QRcode", "Tailwind"],
      live: "https://qadi-hr.vercel.app/dashboard",
    },
    {
      name: t.projects.items[2].name,
      description: t.projects.items[2].description,
      tech: ["Laravel", "Blade", "Ajax", "JavaScript", "OracleDB"],
    },
  ];

  // رابط واتساب للشراء
// استدعاء النص من التعريب
const whatsText = encodeURIComponent(t.projects.whatsText);
const whatsappLink = `https://wa.me/00972592133357?text=${whatsText}`;


  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24 transition-colors duration-500"
    >
      <h2
        className={`text-4xl sm:text-5xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white font-[Lemonada] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t.projects.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 sm:p-6 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-100 sm:hover:scale-105 transition-all duration-500"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-500">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3 transition-colors duration-500">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
              >
               {t.projects.buyNow}
              </a>
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
