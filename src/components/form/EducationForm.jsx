import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiBook, FiPlus, FiX, FiCalendar, FiAward } from "react-icons/fi";

export default function EducationForm() {
  const { state, dispatch } = useContext(PortfolioContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    field: "",
    startDate: "",
    endDate: "",
    gpa: "",
  });

  const handleAdd = () => {
    if (newEducation.degree && newEducation.institution) {
      dispatch({
        type: "ADD_EDUCATION",
        payload: newEducation,
      });
      setNewEducation({
        degree: "",
        institution: "",
        field: "",
        startDate: "",
        endDate: "",
        gpa: "",
      });
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-2">
          <FiBook className="text-white" />
        </div>
        Education
      </h2>

      <div className="space-y-4">
        {!isAdding ? (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
          >
            <FiPlus className="text-lg" />
            <span>Add Education</span>
          </button>
        ) : (
          <div className="space-y-3 bg-white p-4 rounded-lg border border-orange-200">
            <input
              type="text"
              value={newEducation.degree}
              onChange={(e) =>
                setNewEducation({ ...newEducation, degree: e.target.value })
              }
              placeholder="Degree (e.g., Bachelor of Science)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              value={newEducation.field}
              onChange={(e) =>
                setNewEducation({ ...newEducation, field: e.target.value })
              }
              placeholder="Field of Study (e.g., Computer Science)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              value={newEducation.institution}
              onChange={(e) =>
                setNewEducation({ ...newEducation, institution: e.target.value })
              }
              placeholder="Institution Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1 flex items-center">
                  <FiCalendar className="mr-1" />
                  Start Date
                </label>
                <input
                  type="month"
                  value={newEducation.startDate}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, startDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1 flex items-center">
                  <FiCalendar className="mr-1" />
                  End Date
                </label>
                <input
                  type="month"
                  value={newEducation.endDate}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, endDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FiAward className="text-gray-400" />
              <input
                type="text"
                value={newEducation.gpa}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, gpa: e.target.value })
                }
                placeholder="GPA (optional)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handleAdd}
                className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all"
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

        {/* Education List */}
        {state.education && state.education.length > 0 && (
          <div className="space-y-3 mt-4">
            {state.education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-orange-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    {edu.field && (
                      <p className="text-sm text-orange-600 font-medium">{edu.field}</p>
                    )}
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <FiAward className="mr-1" />
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_EDUCATION", payload: index })
                    }
                    className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all flex-shrink-0"
                  >
                    <FiX className="text-sm" />
                  </button>
                </div>
                {(edu.startDate || edu.endDate) && (
                  <p className="text-xs text-gray-500">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}