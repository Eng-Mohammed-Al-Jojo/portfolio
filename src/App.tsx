import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills"; // <- أضفنا هذا
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css"; // <- هذا ضروري
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Home />
        <Skills /> {/* <- هنا قسم المهارات */}
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
