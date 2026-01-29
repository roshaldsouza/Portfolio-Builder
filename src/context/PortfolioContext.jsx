import { createContext, useReducer, useEffect } from "react";

const initialState = {
  hero: {
    name: "",
    role: "",
    bio: "",
    image: null,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      email: "",
    },
  },
  about: "",
  skills: [],
  projects: [],
  experience: [],
  education: [],
  sectionOrder: ["hero", "about", "skills", "projects", "experience", "education"],
  theme: "modern", // modern, minimal, creative, professional
  colorScheme: "blue", // blue, purple, green, orange
};

// Load from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem("portfolioData");
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
  } catch {
    return initialState;
  }
}

function portfolioReducer(state, action) {
  switch (action.type) {
    case "UPDATE_HERO":
      return {
        ...state,
        hero: {
          ...state.hero,
          ...action.payload,
        },
      };

    case "UPDATE_SOCIAL_LINKS":
      return {
        ...state,
        hero: {
          ...state.hero,
          socialLinks: {
            ...state.hero.socialLinks,
            ...action.payload,
          },
        },
      };

    case "UPDATE_HERO_IMAGE":
      return {
        ...state,
        hero: {
          ...state.hero,
          image: action.payload,
        },
      };

    case "UPDATE_ABOUT":
      return {
        ...state,
        about: action.payload,
      };

    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };

    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload),
      };

    case "UPDATE_SKILL":
      return {
        ...state,
        skills: state.skills.map((skill, index) =>
          index === action.payload.index ? action.payload.skill : skill
        ),
      };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case "REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((_, index) => index !== action.payload),
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.payload.index ? action.payload.project : project
        ),
      };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };

    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter((_, index) => index !== action.payload),
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        education: [...state.education, action.payload],
      };

    case "REMOVE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.payload),
      };

    case "REORDER_SECTIONS":
      return {
        ...state,
        sectionOrder: action.payload,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "SET_COLOR_SCHEME":
      return {
        ...state,
        colorScheme: action.payload,
      };

    case "RESET_ALL":
      return initialState;

    case "LOAD_TEMPLATE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [state, dispatch] = useReducer(portfolioReducer, initialState, loadState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem("portfolioData", JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [state]);

  // Export functions
  const exportAsJSON = () => {
    const dataStr = JSON.stringify(state, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const importFromJSON = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        dispatch({ type: "LOAD_TEMPLATE", payload: data });
      } catch (error) {
        console.error("Invalid JSON file:", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <PortfolioContext.Provider
      value={{ state, dispatch, exportAsJSON, importFromJSON }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}