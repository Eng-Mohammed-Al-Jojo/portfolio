import { useLang } from "../context/LanguageContext";

export default function Home() {
  const { t, lang } = useLang();
  const isArabic = lang === "ar";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-4 sm:px-6"
    >
      {/* Container رئيسي */}
   <div
        className={`max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 
        }`}
      >
        {/* Text Section */}
        <div className={`flex-1 ${isArabic ? "text-right" : "text-left"}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight font-[Jersey]">
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

          {/* Buttons */}
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg text-sm sm:text-base transition-transform duration-300 hover:scale-105"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-2xl text-sm sm:text-base transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </div>

       {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 -translate-y-8 md:-translate-y-24">
           <img
            src="./me-f.png"
            alt="Profile"
            className="rounded-full shadow-2xl border-8 border-blue-100 dark:border-blue-400 object-cover object-top w-full h-full md:w-auto md:h-auto"
          />
            <div
              className={`absolute -top-6 w-16 h-16 rounded-full border-4 border-blue-300 opacity-50 animate-ping md:w-32 md:h-32 ${
                isArabic ? "left-0 md:-left-6" : "right-0 md:-right-6"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
