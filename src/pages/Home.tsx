import { useLang } from "../context/LanguageContext";

export default function Home() {
  const { t, lang } = useLang();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* Text */}
        <div className={`flex-1 ${lang === "ar" ? "text-right" : "text-left"}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight font-[Jersey]">
            {t.hero.greeting}{" "}
            <span className="text-blue-600 dark:text-blue-400 font-[Lemonada]">
              {t.hero.name}
            </span>
            <br />
            {t.hero.title}
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl font-[Jersey]">
            {t.hero.description}
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transition hover:scale-105"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-2xl hover:bg-blue-600 hover:text-white transition hover:scale-105"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <img
              src="./me-f.png"
              alt="Profile"
              className="rounded-full shadow-3xl border-8 border-blue-100 dark:border-blue-400 object-cover w-full h-full md:w-auto"
            />
            <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full border-4 border-blue-300 opacity-50 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
