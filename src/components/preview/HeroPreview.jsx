import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiUser,
} from "react-icons/fi";

export default function HeroPreview() {
  const { state } = useContext(PortfolioContext);
  const { hero, theme, colorScheme } = state;

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

  const getGradientClass = () => {
    const gradients = {
      blue: "from-blue-500 to-indigo-600",
      purple: "from-purple-500 to-pink-600",
      green: "from-green-500 to-teal-600",
      orange: "from-orange-500 to-red-600",
    };
    return gradients[colorScheme];
  };

  const socialLinks = [
    {
      icon: FiGithub,
      url: hero.socialLinks?.github,
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: FiLinkedin,
      url: hero.socialLinks?.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FiTwitter,
      url: hero.socialLinks?.twitter,
      label: "Twitter",
      color: "hover:text-sky-500",
    },
    {
      icon: FiMail,
      url: hero.socialLinks?.email ? `mailto:${hero.socialLinks.email}` : "",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  // Theme-specific styles
  const getThemeStyles = () => {
    switch (theme) {
      case "minimal":
        return "py-12";
      case "creative":
        return "py-16 bg-gradient-to-br from-purple-50 to-pink-50";
      case "professional":
        return "py-12 border-b-4 border-blue-500";
      default: // modern
        return `py-16 bg-gradient-to-r ${getGradientClass()} text-white`;
    }
  };

  const isGradientTheme = theme === "modern";

  return (
    <section className={`px-8 ${getThemeStyles()}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {hero.image ? (
              <img
                src={hero.image}
                alt={hero.name || "Profile"}
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl ${
                  theme === "modern"
                    ? "border-4 border-white"
                    : "border-4 border-gray-200"
                }`}
              />
            ) : (
              <div
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-2xl ${
                  isGradientTheme
                    ? "bg-white/20 border-4 border-white/30"
                    : "bg-gray-200 border-4 border-gray-300"
                }`}
              >
                <FiUser
                  className={`text-5xl ${
                    isGradientTheme ? "text-white/60" : "text-gray-400"
                  }`}
                />
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-2 ${
                isGradientTheme ? "text-white" : ""
              }`}
            >
              {hero.name || "Your Name"}
            </h1>
            <h2
              className={`text-xl md:text-2xl mb-4 ${
                isGradientTheme
                  ? "text-white/90"
                  : theme === "dark"
                  ? "text-gray-400"
                  : getColorClass()
              }`}
            >
              {hero.role || "Your Role"}
            </h2>
            <p
              className={`text-base md:text-lg leading-relaxed max-w-2xl ${
                isGradientTheme
                  ? "text-white/80"
                  : theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {hero.bio || "Your bio will appear here"}
            </p>

            {/* Social Links */}
            {socialLinks.some((link) => link.url) && (
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                {socialLinks.map(
                  (link) =>
                    link.url && (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                          isGradientTheme
                            ? "bg-white/20 hover:bg-white/30 text-white"
                            : theme === "dark"
                            ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                            : `bg-gray-100 text-gray-600 ${link.color}`
                        }`}
                        aria-label={link.label}
                      >
                        <link.icon className="text-lg" />
                      </a>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}