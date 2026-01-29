import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

export default function SkillsPreview() {
  const { state } = useContext(PortfolioContext);
  const { skills, theme, colorScheme } = state;

  if (!skills || skills.length === 0) return null;

  const getColorClass = () => {
    const colors = {
      blue: "from-blue-500 to-indigo-600",
      purple: "from-purple-500 to-pink-600",
      green: "from-green-500 to-teal-600",
      orange: "from-orange-500 to-red-600",
    };
    return colors[colorScheme];
  };

  const getTextColorClass = () => {
    const colors = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      orange: "text-orange-600",
    };
    return theme === "dark" ? "text-blue-400" : colors[colorScheme];
  };

  const getThemeStyles = () => {
    switch (theme) {
      case "minimal":
        return "py-8";
      case "creative":
        return "py-12 bg-gradient-to-br from-purple-50 to-pink-50";
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
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            const skillName = skill.name || skill;
            const proficiency = skill.proficiency || 75;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg transition-all hover:shadow-md ${
                  theme === "dark"
                    ? "bg-gray-800"
                    : theme === "creative"
                    ? "bg-white shadow-sm"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {skillName}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-gray-400" : getTextColorClass()
                    }`}
                  >
                    {proficiency}%
                  </span>
                </div>
                <div
                  className={`w-full h-2 rounded-full overflow-hidden ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${getColorClass()} rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${proficiency}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}