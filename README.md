# David Reynolds - Technical Artist Portfolio

A simple, static portfolio website showcasing technical art projects and expertise.

## 📁 Project Structure

```
digitallydavid.github.io/
├── index.html          # Main homepage (all sections in one file)
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features (filtering, mobile menu)
├── assets/             # Static assets
│   └── resume.pdf      # Your resume
├── nextjs-backup/      # Backup of the original Next.js app
└── README.md           # This file
```

## 🚀 How to Use

### **View the Website**
Simply open `index.html` in any web browser to view your portfolio!

### **Edit Content**

#### **Personal Information**
- Edit `index.html` to change:
  - Your name and title
  - About section text
  - Contact information
  - Hero section description

#### **Portfolio Projects**
- Edit the `projects` array in `script.js` to:
  - Add new projects
  - Update project descriptions
  - Change categories
  - Modify technologies used

#### **Styling**
- Edit `styles.css` to change:
  - Colors and theme
  - Layout and spacing
  - Fonts and typography
  - Responsive breakpoints

## 🎨 Customization Guide

### **Adding a New Project**
1. Open `script.js`
2. Find the `projects` array
3. Add a new project object:

```javascript
{
    id: 7, // Unique ID
    title: "Your Project Title",
    subtitle: "Brief description",
    description: "Detailed project description...",
    category: "shaders", // or "tools", "vfx", "procedural", "pipeline"
    year: "2024",
    technologies: ["Technology 1", "Technology 2"],
    featured: false, // Set to true to show "Featured" badge
    image: "🎮" // Emoji or icon for the project
}
```

### **Changing Colors**
The website uses a dark grey and orange theme. To change colors, edit `styles.css`:

- **Primary Orange**: `#f97316`
- **Dark Background**: `#111827`
- **Medium Grey**: `#1f2937`
- **Light Text**: `#e5e7eb`

### **Adding Images**
1. Place images in the `assets/` folder
2. Update the `image` property in project objects to use the image path
3. Or replace emoji placeholders with actual image elements

## 📱 Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Portfolio Filtering**: Filter projects by category
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Dark Theme**: Professional dark grey and orange color scheme

## 🔧 Technical Details

### **HTML Structure**
- Single-page design with sections
- Semantic HTML5 elements
- Accessible navigation and content

### **CSS Features**
- CSS Grid and Flexbox for layouts
- CSS animations and transitions
- Mobile-first responsive design
- Dark theme with orange accents

### **JavaScript Functionality**
- Portfolio filtering system
- Mobile navigation toggle
- Smooth scrolling implementation
- Dynamic content generation

## 📚 Learning Resources

### **HTML Basics**
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

### **CSS Styling**
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### **JavaScript Fundamentals**
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## 🚀 Deployment

### **GitHub Pages (Recommended)**
1. Push your files to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → main branch
4. Your site will be live at `https://yourusername.github.io/repository-name`

### **Other Hosting Options**
- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repository
- **Any web server**: Upload files to any web hosting service

## 📝 Notes

- **No Build Process**: This is a static site - no compilation needed!
- **Fast Loading**: Simple HTML/CSS/JS loads quickly
- **Easy to Edit**: Just edit the files and refresh your browser
- **Backup Available**: Your original Next.js app is saved in `nextjs-backup/`

## 🤝 Support

If you need help customizing your portfolio:
1. Check the comments in the code files
2. Refer to the learning resources above
3. Use browser developer tools to experiment with changes

---

**Happy coding! 🎨**
