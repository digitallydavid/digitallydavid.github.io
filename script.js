/* ========================================
   PORTFOLIO DATA
   ======================================== */

// Array containing all portfolio project information
// Each project object contains: title, description, category, year, technologies, etc.
const projects = [
    {
        id: 1,
        title: "Vehicle Anim Tech and Behavior",
        subtitle: "Advanced vehicle animation system",
        description: "Developed comprehensive vehicle animation technology and behavior systems for Project Dust, featuring realistic suspension dynamics, procedural damage, and adaptive AI driving behaviors.",
        category: "tools", // Used for filtering
        year: "2023",
        technologies: ["C++", "Unreal Engine", "Blueprint", "Animation Blueprints"],
        featured: true, // Shows "Featured" badge
        image: "assets/Media/Video/BuggyClip_01.webm", // Use video as thumbnail
        projectUrl: "./projects/project-dust/vehicle-anim-tech.html", // URL to project detail page
        isProtected: true, // Password protected project
        password: "DigThroughTheDitches" // Simple password protection
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
        image: "🎨",
        projectUrl: "projects/shader-library/"
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
        image: "🔧",
        projectUrl: "projects/animation-tool/"
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
        image: "✨",
        projectUrl: "projects/vfx-system/"
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
        image: "⚙️",
        projectUrl: "projects/pipeline-automation/"
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
        image: "👤",
        projectUrl: "projects/character-shader/"
    }
];

/* ========================================
   PASSWORD PROTECTION
   ======================================== */

// Password protection state
let isPasswordUnlocked = false;

// Check if password was previously entered this session
function checkStoredPassword() {
    const storedPassword = sessionStorage.getItem('portfolioPasswordUnlocked');
    if (storedPassword === 'true') {
        isPasswordUnlocked = true;
        hidePasswordSection();
    }
}

// Hide/show password section based on state
function hidePasswordSection() {
    const passwordSection = document.getElementById('passwordSection');
    if (passwordSection) {
        passwordSection.style.display = 'none';
    }
}

function showPasswordSection() {
    const passwordSection = document.getElementById('passwordSection');
    if (passwordSection) {
        passwordSection.style.display = 'block';
    }
}

// Password validation function
function checkPassword() {
    const passwordInput = document.getElementById('portfolioPassword');
    const passwordHint = document.getElementById('passwordHint');
    const enteredPassword = passwordInput.value;
    
    // Check if password matches any protected project
    const validPassword = projects.some(project => 
        project.isProtected && project.password === enteredPassword
    );
    
    if (validPassword) {
        isPasswordUnlocked = true;
        sessionStorage.setItem('portfolioPasswordUnlocked', 'true');
        passwordHint.textContent = 'Access granted! Protected projects are now visible.';
        passwordHint.className = 'password-hint success';
        hidePasswordSection();
        
        // Re-render portfolio with protected projects
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderPortfolio(activeFilter);
        
        setTimeout(() => {
            passwordHint.textContent = '';
        }, 3000);
    } else {
        passwordHint.textContent = 'Incorrect password. Please try again.';
        passwordHint.className = 'password-hint error';
        passwordInput.value = '';
        
        setTimeout(() => {
            passwordHint.textContent = '';
            passwordHint.className = 'password-hint';
        }, 3000);
    }
}

// Allow Enter key to submit password
function setupPasswordKeyListener() {
    const passwordInput = document.getElementById('portfolioPassword');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }
}

// Update password section visibility based on protected projects and unlock state
function updatePasswordSectionVisibility() {
    const hasProtectedProjects = projects.some(project => project.isProtected);
    
    if (hasProtectedProjects && !isPasswordUnlocked) {
        showPasswordSection();
    } else {
        hidePasswordSection();
    }
}

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
    // Check for stored password from session
    checkStoredPassword();
    
    // Show all projects initially
    renderPortfolio('all');
    
    // Set up all our interactive features
    setupEventListeners();
    
    // Set up password input listener
    setupPasswordKeyListener();
    
    // Enable smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Show/hide password section based on whether there are protected projects
    updatePasswordSectionVisibility();
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
    // Decide which projects to show based on filter
    let filteredProjects = filter === 'all' 
        ? projects // Show all projects
        : projects.filter(project => project.category === filter); // Show only projects in selected category

    // Filter out protected projects if password hasn't been unlocked
    if (!isPasswordUnlocked) {
        filteredProjects = filteredProjects.filter(project => !project.isProtected);
    }

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
            ${project.image.includes('.webm') || project.image.includes('.mp4') ? 
                `<video muted loop playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: cover;">
                    <source src="${project.image}" type="video/webm">
                </video>` :
                project.image.length <= 2 && !/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(project.image) ? 
                    `<span>${project.image}</span>` :
                    `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
            }
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
            <a href="${project.projectUrl || '#'}" class="portfolio-link" onclick="console.log('Navigating to:', '${project.projectUrl || '#'}')">View Details →</a>
        </div>
    `;

    // Add hover functionality to video thumbnails
    const video = projectDiv.querySelector('video');
    if (video) {
        // Set thumbnail frame (2 seconds into video)
        const thumbnailTime = 2;
        
        // Set initial thumbnail frame when video loads
        video.addEventListener('loadeddata', function() {
            video.currentTime = thumbnailTime;
        });
        
        // Play from beginning on hover
        video.addEventListener('mouseenter', function() {
            video.currentTime = 0;
            video.play().catch(function(error) {
                console.log('Portfolio video play failed:', error);
            });
        });
        
        // Return to thumbnail frame on mouse leave
        video.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = thumbnailTime;
        });
        
        // Handle mobile touch events
        video.addEventListener('touchstart', function() {
            if (video.paused) {
                video.currentTime = 0;
                video.play();
            } else {
                video.pause();
                video.currentTime = thumbnailTime;
            }
        });
    }
    
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

// Make checkPassword function globally accessible
window.checkPassword = checkPassword; 