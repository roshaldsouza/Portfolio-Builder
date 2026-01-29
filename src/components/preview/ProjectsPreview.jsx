import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectsPreview() {
  const { state } = useContext(PortfolioContext);
  const { projects, theme, colorScheme } = state;

  if (!projects || projects.length === 0) return null;

  const getColorClass = () => {
    const colors = {
      blue: "bg-blue-100 text-blue-700",
      purple: "bg-purple-100 text-purple-700",
      green: "bg-green-100 text-green-700",
      orange: "bg-orange-100 text-orange-700",
    };
    return theme === "dark" ? "bg-blue-900 text-blue-300" : colors[colorScheme];
  };

  const getLinkColorClass = () => {
    const colors = {
      blue: "text-blue-600 hover:text-blue-700",
      purple: "text-purple-600 hover:text-purple-700",
      green: "text-green-600 hover:text-green-700",
      orange: "text-orange-600 hover:text-orange-700",
    };
    return theme === "dark"
      ? "text-blue-400 hover:text-blue-300"
      : colors[colorScheme];
  };

  const getThemeStyles = () => {
    switch (theme) {
      case "minimal":
        return "py-8";
      case "creative":
        return "py-12 bg-gradient-to-br from-teal-50 to-cyan-50";
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
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all hover:shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:shadow-xl border border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${getColorClass()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {(project.liveLink || project.githubLink) && (
                <div className="flex gap-4 pt-3 border-t border-gray-200">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium transition-all ${getLinkColorClass()}`}
                    >
                      <FiExternalLink className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium transition-all ${
                        theme === "dark"
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-600 hover:text-gray-700"
                      }`}
                    >
                      <FiGithub className="mr-1" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}