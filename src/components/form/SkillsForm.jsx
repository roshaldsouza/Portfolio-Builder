import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiPlus, FiX, FiZap } from "react-icons/fi";

export default function SkillsForm() {
  const { state, dispatch } = useContext(PortfolioContext);
  const [skillName, setSkillName] = useState("");
  const [proficiency, setProficiency] = useState(80);

  const handleAddSkill = () => {
    if (skillName.trim()) {
      dispatch({
        type: "ADD_SKILL",
        payload: { name: skillName, proficiency },
      });
      setSkillName("");
      setProficiency(80);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
          <FiZap className="text-white" />
        </div>
        Skills
      </h2>

      <div className="space-y-4">
        {/* Add Skill Input */}
        <div className="space-y-3">
          <input
            type="text"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a skill (e.g., React, Python, Design)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proficiency: {proficiency}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={proficiency}
              onChange={(e) => setProficiency(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Expert</span>
            </div>
          </div>

          <button
            onClick={handleAddSkill}
            className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
          >
            <FiPlus className="text-lg" />
            <span>Add Skill</span>
          </button>
        </div>

        {/* Skills List */}
        {state.skills.length > 0 && (
          <div className="space-y-2 mt-4">
            <h3 className="text-sm font-semibold text-gray-700">
              Your Skills ({state.skills.length})
            </h3>
            {state.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-purple-200 rounded-lg p-3 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {skill.name || skill}
                  </span>
                  <div className="flex items-center space-x-2">
                    {skill.proficiency && (
                      <span className="text-sm text-purple-600 font-medium">
                        {skill.proficiency}%
                      </span>
                    )}
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_SKILL", payload: index })
                      }
                      className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all"
                    >
                      <FiX className="text-sm" />
                    </button>
                  </div>
                </div>
                {skill.proficiency && (
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {state.skills.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <FiZap className="text-4xl mx-auto mb-2 opacity-50" />
            <p className="text-sm">No skills added yet. Add your first skill above!</p>
          </div>
        )}
      </div>
    </div>
  );
}