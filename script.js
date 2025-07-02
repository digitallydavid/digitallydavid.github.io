/* ========================================
   PORTFOLIO DATA
   ======================================== */

// Array containing all portfolio project information
// Each project object contains: title, description, category, year, technologies, etc.
const projects = [
    {
        id: 1,
        title: "Procedural Terrain Generator",
        subtitle: "Houdini-based landscape system",
        description: "Developed a comprehensive procedural terrain generation system using Houdini, featuring dynamic LOD management and real-time texture blending for open-world environments.",
        category: "procedural", // Used for filtering
        year: "2023",
        technologies: ["Houdini", "Python", "Unreal Engine", "VEX"],
        featured: true, // Shows "Featured" badge
        image: "🏔️" // Emoji placeholder for project image
    },
    {
        id: 2,
        title: "Shader Library Framework",
        subtitle: "Modular shader system",
        description: "Created a comprehensive shader library with 50+ reusable materials, implementing PBR workflows and custom lighting models for stylized and realistic rendering.",
        category: "shaders",
        year: "2023",
        technologies: ["HLSL", "Unreal Engine", "Substance Designer", "C++"],
        featured: true,
        image: "🎨"
    },
    {
        id: 3,
        title: "Animation Pipeline Tools",
        subtitle: "Maya automation suite",
        description: "Built a suite of Python tools for Maya that automated rigging processes, reduced animation setup time by 60%, and improved workflow consistency across the team.",
        category: "tools",
        year: "2022",
        technologies: ["Python", "Maya API", "PyQt", "Git"],
        featured: false,
        image: "🔧"
    },
    {
        id: 4,
        title: "VFX Particle System",
        subtitle: "Real-time particle effects",
        description: "Designed and implemented a GPU-accelerated particle system for real-time VFX, supporting 10,000+ particles with custom force fields and collision detection.",
        category: "vfx",
        year: "2022",
        technologies: ["C++", "OpenGL", "GLSL", "CUDA"],
        featured: false,
        image: "✨"
    },
    {
        id: 5,
        title: "Asset Pipeline Automation",
        subtitle: "Streamlined workflow system",
        description: "Developed an automated asset pipeline that reduced processing time by 70%, including texture optimization, LOD generation, and asset validation.",
        category: "pipeline",
        year: "2021",
        technologies: ["Python", "Docker", "AWS", "Jenkins"],
        featured: false,
        image: "⚙️"
    },
    {
        id: 6,
        title: "Character Shader System",
        subtitle: "Advanced skin rendering",
        description: "Implemented a physically-based character shader with subsurface scattering, dynamic wrinkles, and real-time damage visualization for realistic character rendering.",
        category: "shaders",
        year: "2021",
        technologies: ["HLSL", "Unreal Engine", "Subsurface Scattering", "Normal Maps"],
        featured: false,
        image: "👤"
    }
];

/* ========================================
   DOM ELEMENTS
   ======================================== */

// Get references to important HTML elements we'll be working with
const portfolioGrid = document.getElementById('portfolioGrid'); // Where portfolio items will be displayed
const filterButtons = document.querySelectorAll('.filter-btn'); // All filter buttons
const hamburger = document.querySelector('.hamburger'); // Mobile menu button
const navMenu = document.querySelector('.nav-menu'); // Navigation menu

/* ========================================
   INITIALIZATION
   ======================================== */

// Wait for the page to fully load before running our JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Show all projects initially
    renderPortfolio('all');
    
    // Set up all our interactive features
    setupEventListeners();
    
    // Enable smooth scrolling for navigation links
    setupSmoothScrolling();
});

/* ========================================
   EVENT LISTENERS
   ======================================== */

// Set up all the interactive features on the page
function setupEventListeners() {
    // Portfolio filtering functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get which category to filter by
            const filter = button.getAttribute('data-filter');
            
            // Update which button looks active
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show only projects in that category
            renderPortfolio(filter);
        });
    });

    // Mobile navigation menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle the mobile menu open/closed
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a navigation link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

/* ========================================
   SMOOTH SCROLLING
   ======================================== */

// Make navigation links scroll smoothly to sections instead of jumping
function setupSmoothScrolling() {
    // Find all links that start with # (anchor links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Stop the default jump behavior
            
            // Find the section we want to scroll to
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Smoothly scroll to that section
                target.scrollIntoView({
                    behavior: 'smooth', // Smooth animation
                    block: 'start' // Align to top of section
                });
            }
        });
    });
}

/* ========================================
   PORTFOLIO RENDERING
   ======================================== */

// Display portfolio projects based on selected filter
function renderPortfolio(filter) {
    // Decide which projects to show
    const filteredProjects = filter === 'all' 
        ? projects // Show all projects
        : projects.filter(project => project.category === filter); // Show only projects in selected category

    // Clear the current portfolio grid
    portfolioGrid.innerHTML = '';

    // Create and add each project card to the grid
    filteredProjects.forEach(project => {
        const projectElement = createProjectElement(project);
        portfolioGrid.appendChild(projectElement);
    });
}

/* ========================================
   PROJECT CARD CREATION
   ======================================== */

// Create an HTML element for a single project
function createProjectElement(project) {
    // Create a new div element for the project card
    const projectDiv = document.createElement('div');
    projectDiv.className = 'portfolio-item';
    
    // Build the HTML content for the project card
    projectDiv.innerHTML = `
        <!-- Project image area with emoji placeholder -->
        <div class="portfolio-image">
            <span>${project.image}</span>
            ${project.featured ? '<span class="portfolio-badge">Featured</span>' : ''}
        </div>
        
        <!-- Project information -->
        <div class="portfolio-content">
            <!-- Category and year -->
            <div class="portfolio-meta">
                <span class="portfolio-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                <span class="portfolio-year">${project.year}</span>
            </div>
            
            <!-- Project title and subtitle -->
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-subtitle">${project.subtitle}</p>
            
            <!-- Project description -->
            <p class="portfolio-description">${project.description}</p>
            
            <!-- Technology tags (show first 3, then "+X more") -->
            <div class="portfolio-tech">
                ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''}
            </div>
            
            <!-- Link to view more details -->
            <a href="#" class="portfolio-link">View Details →</a>
        </div>
    `;

    return projectDiv;
}

/* ========================================
   MOBILE NAVIGATION STYLES
   ======================================== */

// CSS styles for mobile navigation (injected via JavaScript)
const mobileNavStyles = `
    @media (max-width: 768px) {
        /* Mobile navigation menu */
        .nav-menu {
            position: fixed;
            left: -100%; /* Start off-screen */
            top: 70px;
            flex-direction: column;
            background-color: #1f2937; /* Dark background to match theme */
            width: 100%;
            text-align: center;
            transition: 0.3s; /* Smooth slide animation */
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.3);
            padding: 2rem 0;
            border-top: 1px solid #374151;
        }

        /* Show menu when active class is added */
        .nav-menu.active {
            left: 0; /* Slide into view */
        }

        /* Space out menu items */
        .nav-menu li {
            margin: 1rem 0;
        }

        /* Animate hamburger icon when menu is open */
        .hamburger.active span:nth-child(2) {
            opacity: 0; /* Hide middle line */
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg); /* Rotate top line */
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg); /* Rotate bottom line */
        }
    }
`;

// Add the mobile navigation styles to the page
const styleSheet = document.createElement("style");
styleSheet.textContent = mobileNavStyles;
document.head.appendChild(styleSheet); 