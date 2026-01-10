import { useLang } from "../context/LanguageContext";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Framework" | "Database" | "OS" | "Tool";
  logo: string;
};

export default function Skills() {
  const { t, lang } = useLang();
  const isArabic = lang === "ar";

  const skillsTitle = t.skills?.title || "Skills";
  const skillsDescription = t.skills?.description || "";

  const skills: Skill[] = [
    // Frontend
    { name: "HTML", category: "Frontend", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", category: "Frontend", logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" },
    { name: "JavaScript", category: "Frontend", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", category: "Frontend", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", category: "Frontend", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "jQuery", category: "Frontend", logo: "https://cdn.simpleicons.org/jquery/0769AD" },
    { name: "UX/UI Design", category: "Frontend", logo: "https://cdn.simpleicons.org/figma/F24E1E" },

    // Backend
    { name: "Java", category: "Backend", logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" },
    { name: "Python", category: "Backend", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PHP", category: "Backend", logo: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Node.js", category: "Backend", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "REST APIs", category: "Backend", logo: "https://www.svgrepo.com/show/447473/rest-api.svg" },

    // Frameworks
    { name: "React", category: "Framework", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", category: "Framework", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Laravel", category: "Framework", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Flutter", category: "Framework", logo: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "Bootstrap", category: "Framework", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "Android SDK", category: "Framework", logo: "https://cdn.simpleicons.org/android/3DDC84" },
    { name: "JSP", category: "Framework", logo: "https://www.svgrepo.com/show/14636/jsp-open-file-format-with-java-logo.svg" },
    { name: "NestJS", category: "Framework", logo: "https://cdn.simpleicons.org/nestjs/E0234E" },

    // Databases
    { name: "Oracle DB", category: "Database", logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/oracle.png" },
    { name: "MySQL", category: "Database", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Firebase", category: "Database", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "MongoDB", category: "Database", logo: "https://cdn.simpleicons.org/mongodb/47A248" },

    // OS
    { name: "Windows", category: "OS", logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/windows.png" },
    { name: "Linux", category: "OS", logo: "https://cdn.simpleicons.org/linux/FCC624" },

    // Tools
    { name: "Git", category: "Tool", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", category: "Tool", logo: "https://cdn.simpleicons.org/github/181717" },
    { name: "GitLab", category: "Tool", logo: "https://cdn.simpleicons.org/gitlab/FC6D26" },
  ];

  const categories = ["Frontend","Backend","Framework","Database","OS","Tool"];

 return (
  <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-24 transition-colors duration-500">
    <h2
        className={`text-4xl sm:text-5xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white font-[Lemonada] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {skillsTitle}
      </h2>

    {skillsDescription && <p className={`text-lg mb-12 ${isArabic ? "text-right" : "text-left"}`}>
      {skillsDescription}
    </p>}

    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category}>
         <h3 className="text-2xl font-bold mb-4">
          {t.skills.categories[category as keyof typeof t.skills.categories]}
        </h3>

        <div className="flex flex-wrap gap-4">
            {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm bg-white dark:bg-gray-800 
                            hover:bg-blue-100 dark:hover:bg-blue-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                    />
                    {skill.name}
                </span>
                ))}
            </div>


          <hr className="mt-8 border-gray-300 dark:border-gray-700" />
        </div>
      ))}
    </div>
  </section>
);
}
