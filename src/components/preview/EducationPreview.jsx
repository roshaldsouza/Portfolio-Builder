import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiBook, FiAward, FiCalendar } from "react-icons/fi";

export default function EducationPreview() {
  const { state } = useContext(PortfolioContext);
  const { education, theme, colorScheme } = state;

  if (!education || education.length === 0) return null;

  const getColorClass = () => {
    const colors = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      orange: "text-orange-600",
    };
    return theme === "dark" ? "text-blue-400" : colors[colorScheme];
  };

  const getBgColorClass = () => {
    const colors = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
    };
    return colors[colorScheme];
  };

  const getThemeStyles = () => {
    switch (theme) {
      case "minimal":
        return "py-8";
      case "creative":
        return "py-12 bg-gradient-to-br from-orange-50 to-yellow-50";
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
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-6 border-l-2 last:border-l-0 last:pb-0 ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 ${getBgColorClass()} rounded-full ring-4 ${
                  theme === "dark" ? "ring-gray-900" : "ring-white"
                }`}
              />

              <div
                className={`p-5 rounded-lg transition-all ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:shadow-md border border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p
                        className={`text-lg font-semibold ${
                          theme === "dark" ? "text-gray-300" : getColorClass()
                        }`}
                      >
                        {edu.field}
                      </p>
                    )}
                    <p
                      className={`text-base ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <FiBook
                    className={`text-2xl ${
                      theme === "dark" ? "text-gray-600" : "text-gray-400"
                    }`}
                  />
                </div>

                <div
                  className={`flex flex-wrap gap-3 text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {(edu.startDate || edu.endDate) && (
                    <span className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {edu.startDate} - {edu.endDate || "Present"}
                    </span>
                  )}
                  {edu.gpa && (
                    <span className="flex items-center">
                      <FiAward className="mr-1" />
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}