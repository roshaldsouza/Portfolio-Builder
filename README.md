<div align="center">

# 🎨 Portfolio Builder

### Create Stunning Professional Portfolios in Minutes

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*A modern, feature-rich portfolio builder with live preview, dark mode, and export functionality*

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Customization](#-customization)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Features
- 🎨 **Live Preview** - Real-time updates as you edit
- 🌙 **Dark Mode** - Beautiful ultra-dark theme
- 🎭 **4 Theme Styles** - Modern, Minimal, Creative, Professional
- 🎨 **4 Color Schemes** - Blue, Purple, Green, Orange
- 📱 **Fully Responsive** - Perfect on all devices

</td>
<td width="50%">

### 🚀 Advanced Features
- 🖼️ **Image Upload** - Add your profile photo
- 🔗 **Social Links** - GitHub, LinkedIn, Twitter, Email
- 📊 **Skill Proficiency** - Visual bars with percentages
- 📈 **Experience Timeline** - Professional work history
- 🎓 **Education Section** - Academic credentials

</td>
</tr>
</table>

### 💾 Data Management
- ✅ **Auto-save** - LocalStorage integration
- 📤 **Export** - Download as JSON
- 📥 **Import** - Restore from backup
- 🔄 **Reset** - Fresh start anytime

### 🎨 Design Features
- 🎯 **Drag & Drop** - Reorder sections easily
- 🎪 **Smooth Animations** - Professional transitions
- 🎨 **Gradient Accents** - Beautiful color schemes
- 📏 **Consistent Design** - Professional spacing & typography


---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio-builder.git
cd portfolio-builder

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open your browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Usage

### 1. Hero Section
Add your name, role, bio, and profile image. Include your social media links for easy contact.

### 2. About
Write a detailed description about yourself, your background, and what makes you unique.

### 3. Skills
Add your skills with proficiency levels (0-100%). Visual progress bars show your expertise.

### 4. Projects
Showcase your work with:
- Project titles and descriptions
- Live demo links
- GitHub repository links
- Technology tags

### 5. Experience
Add your professional history with:
- Job title and company
- Location and dates
- Detailed role descriptions
- Timeline visualization

### 6. Education
Include your academic background:
- Degree and field of study
- Institution name
- Dates and GPA (optional)


---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 18** | UI Framework |
| 🎨 **Tailwind CSS** | Styling |
| ⚡ **Vite** | Build Tool |
| 🎯 **@dnd-kit** | Drag & Drop |
| 🎨 **React Icons** | Icon Library |
| 💾 **LocalStorage** | Data Persistence |

</div>

---

## 📁 Project Structure

```
portfolio-builder/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 form/              # Form components
│   │   │   ├── HeroForm.jsx
│   │   │   ├── AboutForm.jsx
│   │   │   ├── SkillsForm.jsx
│   │   │   ├── ProjectsForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   └── EducationForm.jsx
│   │   ├── 📂 preview/           # Preview components
│   │   │   ├── HeroPreview.jsx
│   │   │   ├── AboutPreview.jsx
│   │   │   ├── SkillsPreview.jsx
│   │   │   ├── ProjectsPreview.jsx
│   │   │   ├── ExperiencePreview.jsx
│   │   │   └── EducationPreview.jsx
│   │   ├── 📂 dragdrop/          # Drag & drop
│   │   │   └── DraggableSection.jsx
│   │   ├── ThemeSelector.jsx
│   │   └── ColorSchemeSelector.jsx
│   ├── 📂 context/
│   │   └── PortfolioContext.jsx  # State management
│   ├── App.jsx                   # Main app
│   └── main.jsx                  # Entry point
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.js
└── 📄 README.md
```

---

## 🎮 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Submit forms (Skills, Projects) |
| `Drag` | Reorder sections in preview |
| `Click` | Navigate between tabs |

---

## 💡 Tips & Best Practices

### For Best Results:
1. 📸 **Upload a professional photo** - First impressions matter
2. 🎯 **Be specific with skills** - Accurate proficiency levels
3. 📊 **Quantify achievements** - Use numbers in descriptions
4. 💾 **Export regularly** - Backup your data
5. 🎨 **Try different themes** - Find your perfect style

### Performance Tips:
- 🖼️ Keep images under 2MB
- 📝 Use concise descriptions
- 🔄 Export data as backup
- 🌐 Test on multiple devices

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Known Issues & Troubleshooting

### Common Issues

<details>
<summary><b>Styles not applying</b></summary>
<br>
Make sure Tailwind directives are in your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Restart the dev server after changes.
</details>

<details>
<summary><b>Icons not showing</b></summary>
<br>
Install react-icons:

```bash
npm install react-icons
```
</details>

<details>
<summary><b>LocalStorage errors</b></summary>
<br>
Clear browser localStorage or use incognito mode:

```javascript
// In browser console
localStorage.clear()
```
</details>

<details>
<summary><b>Build errors</b></summary>
<br>
Delete node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```
</details>

---

## 📊 Features Comparison

| Feature | Free Version | Pro Version |
|---------|--------------|-------------|
| Profile Image | ✅ | ✅ |
| Social Links | ✅ | ✅ |
| Skills with Proficiency | ✅ | ✅ |
| Projects Section | ✅ | ✅ |
| Experience Timeline | ✅ | ✅ |
| Education Section | ✅ | ✅ |
| 4 Theme Styles | ✅ | ✅ |
| 4 Color Schemes | ✅ | ✅ |
| Export/Import | ✅ | ✅ |

---

## 🔮 Roadmap

- [ ] 📄 PDF Export
- [ ] 🌐 Multi-language Support
- [ ] 🎨 More Theme Templates
- [ ] ☁️ Cloud Sync
- [ ] 👥 Collaboration Features
- [ ] 📊 Analytics Integration
- [ ] 🎭 Custom CSS Editor
- [ ] 📱 Mobile App
- [ ] 🤖 AI-powered Suggestions
- [ ] 🔗 LinkedIn Import

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@roshaldsouza](https://github.com/roshaldsouza)
- LinkedIn: [Roshal Dsouza](https://linkedin.com/in/roshaldsouza)
- Twitter: [@roshaldsouza](https://twitter.com/roshaldsouza)
- Email: roshalds789@gmail.com

---

## 🙏 Acknowledgments

Special thanks to:

- [React](https://reactjs.org/) - The amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS
- [Vite](https://vitejs.dev/) - For blazing fast builds
- [@dnd-kit](https://dndkit.com/) - For smooth drag & drop
- [React Icons](https://react-icons.github.io/react-icons/) - For beautiful icons
- All contributors who help improve this project



---

## ⭐ Show Your Support

If this project helped you, please give it a ⭐!

<div align="center">

### Made with ❤️ by developer, for developers

**[⬆ Back to Top](#-portfolio-builder)**

---

[![Star on GitHub](https://img.shields.io/github/stars/roshaldsouza/portfolio-builder?style=social)](https://github.com/roshaldsouza/portfolio-builder)
[![Fork on GitHub](https://img.shields.io/github/forks/roshaldsouza/portfolio-builder?style=social)](https://github.com/roshaldsouza/portfolio-builder/fork)
[![Watch on GitHub](https://img.shields.io/github/watchers/roshaldsouza/portfolio-builder?style=social)](https://github.com/roshaldsouza/portfolio-builder)

</div>