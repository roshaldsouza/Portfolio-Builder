import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

export default function AboutPreview() {
  const { state } = useContext(PortfolioContext);
  const { about, theme } = state;

  if (!about) return null;

  const getThemeStyles = () => {
    switch (theme) {
      case "minimal":
        return "py-8";
      case "creative":
        return "py-12 bg-gradient-to-br from-indigo-50 to-purple-50";
      case "professional":
        return "py-10 bg-gray-50";
      default: // modern
        return "py-12";
    }
  };

  return (
    <section className={`px-8 ${getThemeStyles()}`}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>
        <div
          className={`prose prose-lg max-w-none ${
            theme === "dark"
              ? "text-gray-300"
              : "text-gray-700"
          }`}
        >
          <p className="leading-relaxed whitespace-pre-wrap">
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}