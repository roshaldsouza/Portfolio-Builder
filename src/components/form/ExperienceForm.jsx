import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiBriefcase, FiPlus, FiX, FiCalendar, FiMapPin } from "react-icons/fi";

export default function ExperienceForm() {
  const { state, dispatch } = useContext(PortfolioContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  });

  const handleAdd = () => {
    if (newExperience.title && newExperience.company) {
      dispatch({
        type: "ADD_EXPERIENCE",
        payload: newExperience,
      });
      setNewExperience({
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      });
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
          <FiBriefcase className="text-white" />
        </div>
        Experience
      </h2>

      <div className="space-y-4">
        {!isAdding ? (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
          >
            <FiPlus className="text-lg" />
            <span>Add Experience</span>
          </button>
        ) : (
          <div className="space-y-3 bg-white p-4 rounded-lg border border-green-200">
            <input
              type="text"
              value={newExperience.title}
              onChange={(e) =>
                setNewExperience({ ...newExperience, title: e.target.value })
              }
              placeholder="Job Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
              placeholder="Company Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex items-center space-x-2">
              <FiMapPin className="text-gray-400" />
              <input
                type="text"
                value={newExperience.location}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, location: e.target.value })
                }
                placeholder="Location"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1 flex items-center">
                  <FiCalendar className="mr-1" />
                  Start Date
                </label>
                <input
                  type="month"
                  value={newExperience.startDate}
                  onChange={(e) =>
                    setNewExperience({ ...newExperience, startDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1 flex items-center">
                  <FiCalendar className="mr-1" />
                  End Date
                </label>
                <input
                  type="month"
                  value={newExperience.endDate}
                  onChange={(e) =>
                    setNewExperience({ ...newExperience, endDate: e.target.value })
                  }
                  disabled={newExperience.current}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
            </div>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newExperience.current}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    current: e.target.checked,
                    endDate: e.target.checked ? "" : newExperience.endDate,
                  })
                }
                className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">I currently work here</span>
            </label>

            <textarea
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({ ...newExperience, description: e.target.value })
              }
              placeholder="Describe your role and achievements..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />

            <div className="flex space-x-2">
              <button
                onClick={handleAdd}
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all"
              >
                Save
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Experience List */}
        {state.experience && state.experience.length > 0 && (
          <div className="space-y-3 mt-4">
            {state.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-green-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    {exp.location && (
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <FiMapPin className="mr-1" />
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_EXPERIENCE", payload: index })
                    }
                    className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all flex-shrink-0"
                  >
                    <FiX className="text-sm" />
                  </button>
                </div>
                {(exp.startDate || exp.endDate) && (
                  <p className="text-xs text-gray-500 mb-2">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate || "Present"}
                  </p>
                )}
                {exp.description && (
                  <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}