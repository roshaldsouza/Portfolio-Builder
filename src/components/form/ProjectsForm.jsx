import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { FiFolder, FiPlus, FiX, FiLink, FiGithub } from "react-icons/fi";

export default function ProjectsForm() {
  const { state, dispatch } = useContext(PortfolioContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    liveLink: "",
    githubLink: "",
    tags: "",
  });

  const handleAdd = () => {
    if (newProject.title && newProject.description) {
      dispatch({
        type: "ADD_PROJECT",
        payload: {
          ...newProject,
          tags: newProject.tags.split(",").map(tag => tag.trim()).filter(Boolean),
        },
      });
      setNewProject({
        title: "",
        description: "",
        liveLink: "",
        githubLink: "",
        tags: "",
      });
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-2">
          <FiFolder className="text-white" />
        </div>
        Projects
      </h2>

      <div className="space-y-4">
        {!isAdding ? (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
          >
            <FiPlus className="text-lg" />
            <span>Add Project</span>
          </button>
        ) : (
          <div className="space-y-3 bg-white p-4 rounded-lg border border-teal-200">
            <input
              type="text"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              placeholder="Project Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              placeholder="Project Description"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />

            <div className="flex items-center space-x-2">
              <FiLink className="text-gray-400" />
              <input
                type="url"
                value={newProject.liveLink}
                onChange={(e) =>
                  setNewProject({ ...newProject, liveLink: e.target.value })
                }
                placeholder="Live Demo Link (optional)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <FiGithub className="text-gray-400" />
              <input
                type="url"
                value={newProject.githubLink}
                onChange={(e) =>
                  setNewProject({ ...newProject, githubLink: e.target.value })
                }
                placeholder="GitHub Repository (optional)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <input
              type="text"
              value={newProject.tags}
              onChange={(e) =>
                setNewProject({ ...newProject, tags: e.target.value })
              }
              placeholder="Tags (comma-separated, e.g., React, Node.js, MongoDB)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <div className="flex space-x-2">
              <button
                onClick={handleAdd}
                className="flex-1 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all"
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

        {/* Projects List */}
        {state.projects && state.projects.length > 0 && (
          <div className="space-y-3 mt-4">
            {state.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-teal-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{project.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {(project.liveLink || project.githubLink) && (
                      <div className="flex gap-2 mt-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-teal-600 hover:text-teal-700 flex items-center"
                          >
                            <FiLink className="mr-1" />
                            Live Demo
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-600 hover:text-gray-700 flex items-center"
                          >
                            <FiGithub className="mr-1" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_PROJECT", payload: index })
                    }
                    className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all flex-shrink-0 ml-2"
                  >
                    <FiX className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}