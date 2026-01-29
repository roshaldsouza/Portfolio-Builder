import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { FiCheck } from "react-icons/fi";

const colorSchemes = [
  {
    id: "blue",
    name: "Ocean Blue",
    colors: ["#3b82f6", "#1d4ed8", "#60a5fa"],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  },
  {
    id: "purple",
    name: "Royal Purple",
    colors: ["#a855f7", "#7e22ce", "#c084fc"],
    gradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
  },
  {
    id: "green",
    name: "Forest Green",
    colors: ["#10b981", "#059669", "#34d399"],
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    id: "orange",
    name: "Sunset Orange",
    colors: ["#f97316", "#ea580c", "#fb923c"],
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
  },
];

export default function ColorSchemeSelector() {
  const { state, dispatch } = useContext(PortfolioContext);

  return (
    <div>
      <h4 className="text-sm font-semibold text-white/90 mb-3">Color Scheme</h4>
      <div className="grid grid-cols-2 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            onClick={() =>
              dispatch({ type: "SET_COLOR_SCHEME", payload: scheme.id })
            }
            className={`relative p-3 rounded-lg border-2 transition-all text-left ${
              state.colorScheme === scheme.id
                ? "border-white bg-white/20 shadow-lg"
                : "border-white/20 hover:border-white/40 bg-white/5"
            }`}
          >
            <div className="flex space-x-1 mb-2">
              {scheme.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1 h-8 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="text-sm font-medium text-white">{scheme.name}</div>
            {state.colorScheme === scheme.id && (
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
