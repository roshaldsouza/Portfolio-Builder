import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { FiCheck } from "react-icons/fi";

const themes = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
    preview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant",
    preview: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold and artistic",
    preview: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Business-oriented design",
    preview: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export default function ThemeSelector() {
  const { state, dispatch } = useContext(PortfolioContext);

  return (
    <div>
      <h4 className="text-sm font-semibold text-white/90 mb-3">Theme Style</h4>
      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => dispatch({ type: "SET_THEME", payload: theme.id })}
            className={`relative p-3 rounded-lg border-2 transition-all text-left ${
              state.theme === theme.id
                ? "border-white bg-white/20 shadow-lg"
                : "border-white/20 hover:border-white/40 bg-white/5"
            }`}
          >
            <div
              className="h-8 rounded mb-2"
              style={{ background: theme.preview }}
            />
            <div className="text-sm font-medium text-white">{theme.name}</div>
            <div className="text-xs text-white/70">{theme.description}</div>
            {state.theme === theme.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <FiCheck className="text-green-600 text-sm" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}