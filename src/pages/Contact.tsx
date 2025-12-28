import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t, lang } = useLang();

  const whatsappNumber = "+972592133357";
  const emailAddress = "eng.mohammed.aljojo98@gmail.com";

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center text-center transition-colors duration-500"
    >
      <h2
        className={`text-4xl sm:text-5xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white font-[Lemonada] ${
          lang === "ar" ? "text-right" : "text-center"
        }`}
      >
        {t.contact.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg font-[Jersey]">
        {t.contact.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <BsWhatsapp size={24} />
          {t.contact.whatsapp}
        </a>
        <a
          href={`mailto:${emailAddress}`}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <HiOutlineMail size={24} />
          {t.contact.email}
        </a>
      </div>
    </section>
  );
}
