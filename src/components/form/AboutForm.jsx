import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiFileText } from "react-icons/fi";

export default function AboutForm() {
  const { state, dispatch } = useContext(PortfolioContext);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-2">
          <FiFileText className="text-white" />
        </div>
        About
      </h2>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Tell us about yourself
        </label>
        <textarea
          value={state.about}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ABOUT",
              payload: e.target.value,
            })
          }
          placeholder="Write a detailed description about yourself, your background, interests, and what makes you unique..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
        />
        <p className="text-xs text-gray-500 mt-2">
          {state.about.length} characters
        </p>
      </div>
    </div>
  );
}