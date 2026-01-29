import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiImage,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiX,
} from "react-icons/fi";

export default function HeroForm() {
  const { state, dispatch } = useContext(PortfolioContext);
  const [imagePreview, setImagePreview] = useState(state.hero.image);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setImagePreview(base64);
        dispatch({ type: "UPDATE_HERO_IMAGE", payload: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    dispatch({ type: "UPDATE_HERO_IMAGE", payload: null });
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-white flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
          <FiUser className="text-white" />
        </div>
        Hero Section
      </h2>

      <div className="space-y-4">
        {/* Profile Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Profile Image
          </label>
          <div className="flex items-center space-x-4">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                />
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FiX className="text-xs" />
                </button>
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-600 shadow-lg">
                <FiImage className="text-gray-500 text-3xl" />
              </div>
            )}
            <label className="px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg cursor-pointer transition-all font-medium text-sm text-gray-200 shadow-sm">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <FiUser className="inline mr-1" />
            Your Name
          </label>
          <input
            type="text"
            value={state.hero.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_HERO",
                payload: { name: e.target.value },
              })
            }
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <FiBriefcase className="inline mr-1" />
            Your Role
          </label>
          <input
            type="text"
            value={state.hero.role}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_HERO",
                payload: { role: e.target.value },
              })
            }
            placeholder="e.g. Frontend Developer"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <FiFileText className="inline mr-1" />
            Short Bio
          </label>
          <textarea
            value={state.hero.bio}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_HERO",
                payload: { bio: e.target.value },
              })
            }
            placeholder="Tell us about yourself in a few words..."
            rows={3}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
          />
        </div>

        {/* Social Links */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Social Links
          </label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiGithub className="text-white" />
              </div>
              <input
                type="url"
                value={state.hero.socialLinks.github}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SOCIAL_LINKS",
                    payload: { github: e.target.value },
                  })
                }
                placeholder="https://github.com/username"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiLinkedin className="text-white" />
              </div>
              <input
                type="url"
                value={state.hero.socialLinks.linkedin}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SOCIAL_LINKS",
                    payload: { linkedin: e.target.value },
                  })
                }
                placeholder="https://linkedin.com/in/username"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiTwitter className="text-white" />
              </div>
              <input
                type="url"
                value={state.hero.socialLinks.twitter}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SOCIAL_LINKS",
                    payload: { twitter: e.target.value },
                  })
                }
                placeholder="https://twitter.com/username"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMail className="text-white" />
              </div>
              <input
                type="email"
                value={state.hero.socialLinks.email}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SOCIAL_LINKS",
                    payload: { email: e.target.value },
                  })
                }
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}