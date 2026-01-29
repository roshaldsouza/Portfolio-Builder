import { useContext, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PortfolioContext } from "./context/PortfolioContext";
import {
  FiDownload,
  FiUpload,
  FiRefreshCw,
  FiSun,
  FiMoon,
  FiGrid,
  FiEye,
} from "react-icons/fi";

import HeroForm from "./components/form/HeroForm";
import AboutForm from "./components/form/AboutForm";
import SkillsForm from "./components/form/SkillsForm";
import ProjectsForm from "./components/form/ProjectsForm";
import ExperienceForm from "./components/form/ExperienceForm";
import EducationForm from "./components/form/EducationForm";

import HeroPreview from "./components/preview/HeroPreview";
import AboutPreview from "./components/preview/AboutPreview";
import SkillsPreview from "./components/preview/SkillsPreview";
import ProjectsPreview from "./components/preview/ProjectsPreview";
import ExperiencePreview from "./components/preview/ExperiencePreview";
import EducationPreview from "./components/preview/EducationPreview";

import DraggableSection from "./components/dragdrop/DraggableSection";
import ThemeSelector from "./components/ThemeSelector";
import ColorSchemeSelector from "./components/ColorSchemeSelector";

function App() {
  const { state, dispatch, exportAsJSON, importFromJSON } =
    useContext(PortfolioContext);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [activeTab, setActiveTab] = useState("content");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = state.sectionOrder.indexOf(active.id);
    const newIndex = state.sectionOrder.indexOf(over.id);

    const newOrder = [...state.sectionOrder];
    const [moved] = newOrder.splice(oldIndex, 1);
    newOrder.splice(newIndex, 0, moved);

    dispatch({
      type: "REORDER_SECTIONS",
      payload: newOrder,
    });
  }

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (file) importFromJSON(file);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset everything?")) {
      dispatch({ type: "RESET_ALL" });
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      {/* TOP NAVIGATION BAR - ULTRA DARK & ELEGANT */}
      <header className="bg-black border-b border-gray-900 text-white shadow-2xl">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center shadow-lg">
              <FiGrid className="text-xl text-gray-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-200">
                Portfolio Builder
              </h1>
              <p className="text-xs text-gray-500">
                Create your stunning portfolio
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="px-3 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-all flex items-center space-x-2 text-xs font-medium text-gray-400 hover:text-gray-300"
            >
              {state.theme === "dark" ? (
                <FiMoon className="text-base" />
              ) : (
                <FiSun className="text-base" />
              )}
              <span>Theme</span>
            </button>

            {/* Export */}
            <button
              onClick={exportAsJSON}
              className="px-3 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-all flex items-center space-x-2 text-xs font-medium text-gray-400 hover:text-gray-300"
            >
              <FiDownload className="text-base" />
              <span>Export</span>
            </button>

            {/* Import */}
            <label className="px-3 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-all flex items-center space-x-2 text-xs font-medium text-gray-400 hover:text-gray-300 cursor-pointer">
              <FiUpload className="text-base" />
              <span>Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="px-3 py-2 bg-gray-900 hover:bg-red-950 border border-gray-800 hover:border-red-900 rounded-lg transition-all flex items-center space-x-2 text-xs font-medium text-gray-400 hover:text-red-400"
            >
              <FiRefreshCw className="text-base" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Theme Selector Dropdown */}
        {showThemeSelector && (
          <div className="px-6 pb-4 border-t border-gray-900">
            <div className="bg-gray-950 border border-gray-900 rounded-lg p-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <ThemeSelector />
                <ColorSchemeSelector />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT PANEL - FORMS - DARK THEME */}
        <div className="w-1/2 bg-gray-950 overflow-y-auto shadow-xl border-r border-gray-900">
          <div className="p-6">
            {/* Tab Navigation - Dark Theme */}
            <div className="flex space-x-2 mb-6 bg-gray-900 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("content")}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition-all text-sm ${
                  activeTab === "content"
                    ? "bg-gray-800 shadow-sm text-gray-200"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Content
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition-all text-sm ${
                  activeTab === "design"
                    ? "bg-gray-800 shadow-sm text-gray-200"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Design
              </button>
            </div>

            {/* Content Tab */}
            {activeTab === "content" && (
              <div className="space-y-6">
                <HeroForm />
                <AboutForm />
                <SkillsForm />
                <ProjectsForm />
                <ExperienceForm />
                <EducationForm />
              </div>
            )}

            {/* Design Tab */}
            {activeTab === "design" && (
              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-200">
                    <FiEye className="mr-2" />
                    Theme Settings
                  </h3>
                  <ThemeSelector />
                  <div className="mt-4">
                    <ColorSchemeSelector />
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Section Order</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Drag sections in the preview to reorder them
                  </p>
                  <div className="space-y-2">
                    {state.sectionOrder.map((section, index) => (
                      <div
                        key={section}
                        className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between"
                      >
                        <span className="font-medium capitalize text-gray-300">{section}</span>
                        <span className="text-sm text-gray-500">#{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL - LIVE PREVIEW - DARK BACKGROUND */}
        <div className="w-1/2 bg-black overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-300 flex items-center">
                <FiEye className="mr-2" />
                Live Preview
              </h2>
              <div className="text-xs text-gray-500">
                <span className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 rounded-full">
                  Theme: <span className="font-medium capitalize text-gray-400">{state.theme}</span>
                </span>
              </div>
            </div>

            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-900">
              <div
                className={`transition-colors ${
                  state.theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={state.sectionOrder}
                    strategy={verticalListSortingStrategy}
                  >
                    {state.sectionOrder.map((section) => {
                      const sections = {
                        hero: <HeroPreview />,
                        about: <AboutPreview />,
                        skills: <SkillsPreview />,
                        projects: <ProjectsPreview />,
                        experience: <ExperiencePreview />,
                        education: <EducationPreview />,
                      };

                      return (
                        <DraggableSection key={section} id={section}>
                          {sections[section]}
                        </DraggableSection>
                      );
                    })}
                  </SortableContext>
                </DndContext>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;