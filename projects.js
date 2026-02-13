
  // ============= UPDATED PROJECT MANAGER WITH ALL PROJECTS =============
class ProjectManager {
    constructor() {
        this.projectData = [
        {
            id: 'project1',
            title: 'Stock Calculator',
            category: ['finance', 'showcase'],
            difficulty: 3,
            date: '2024-12-15',
            description: 'Advanced stock calculator which can calculate your P&L according to your investment.',
            tags: ['AI', 'Python', 'JAVA', 'Finance'],
            demoLink: 'https://saiyam-creator.github.io/stock-calculator/',
            codeLink: 'https://github.com/saiyam-creator/stock-calculator',
            stats: {
                users: '500+',
                rating: '4.8',
                updates: '12'
            },
            favorite: true
        },
        {
            id: 'project2',
            title: 'Investment Calculator',
            category: ['finance'],
            difficulty: 2,
            date: '2024-11-20',
            description: 'Calculate your investment returns with advanced algorithms.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Finance'],
            demoLink: 'https://saiyam-creator.github.io/investment-calculate/',
            codeLink: 'https://github.com/saiyam-creator/investment-calculate',
            stats: {
                users: '300+',
                rating: '4.5',
                updates: '8'
            },
            favorite: false
        },
        {
            id: 'project3',
            title: 'English Corrector',
            category: ['education'],
            difficulty: 3,
            date: '2024-10-05',
            description: 'Improve your English grammar with this AI-powered tool.',
            tags: ['HTML', 'CSS', 'JS', 'Education'],
            demoLink: 'https://saiyam-creator.github.io/correct-english/',
            codeLink: 'https://github.com/saiyam-creator/correct-english',
            stats: {
                users: '1000+',
                rating: '4.9',
                updates: '15'
            },
            favorite: true
        },
        {
            id: 'project4',
            title: 'Solar System',
            category: ['education', 'showcase'],
            difficulty: 4,
            date: '2024-09-15',
            description: 'Explore our solar system in interactive 3D view.',
            tags: ['AI', '3D', 'Education'],
            demoLink: 'https://saiyam-creator.github.io/solar-system/',
            codeLink: 'https://github.com/saiyam-creator/solar-system',
            stats: {
                users: '2000+',
                rating: '4.7',
                updates: '10'
            },
            favorite: true
        },
        {
            id: 'project5',
            title: 'All About Shapes',
            category: ['education'],
            difficulty: 2,
            date: '2024-08-10',
            description: 'Educational app teaching kids about shapes using interactive visuals.',
            tags: ['JS', 'HTML', 'CSS', 'Education'],
            demoLink: 'https://saiyam-creator.github.io/all-about-shapes/',
            codeLink: 'https://github.com/saiyam-creator/all-about-shapes',
            stats: {
                users: '800+',
                rating: '4.6',
                updates: '6'
            },
            favorite: false
        },
        {
            id: 'project6',
            title: 'Life GPS',
            category: ['ai', 'showcase'],
            difficulty: 5,
            date: '2024-07-25',
            description: 'AI-powered life coaching app to help you navigate personal and professional challenges.',
            tags: ['React', 'AI', 'Web App', 'Life Tools'],
            demoLink: 'https://life-gps-coral.vercel.app/',
            codeLink: 'https://github.com/saiyam-creator/life-gps',
            stats: {
                users: '1500+',
                rating: '4.8',
                updates: '20'
            },
            favorite: true
        },
        {
            id: 'project7',
            title: 'WorthIT',
            category: ['finance'],
            difficulty: 4,
            date: '2024-06-30',
            description: 'AI-driven personal finance app to help users manage expenses and investments effectively.',
            tags: ['React', 'AI', 'Finance', 'Dashboard'],
            demoLink: 'https://saiyam-creator.github.io/worthit-app/',
            codeLink: 'https://github.com/saiyam-creator/worthit-app',
            stats: {
                users: '1200+',
                rating: '4.7',
                updates: '18'
            },
            favorite: false
        },
        {
            id: 'project8',
            title: 'Gita Ka Gyan',
            category: ['ai', 'showcase'],
            difficulty: 4,
            date: '2024-05-15',
            description: 'Shlokas of Bhagavad Gita with meaning according to your feeling.',
            tags: ['HTML', 'CSS', 'JS', 'AI', 'Web App', 'Spiritual'],
            demoLink: 'https://saiyam-creator.github.io/krishna-path/',
            codeLink: 'https://github.com/saiyam-creator/krishna-path',
            stats: {
                users: '2500+',
                rating: '4.9',
                updates: '25'
            },
            favorite: true
        },
    {
            id: 'project9',
            title: 'Ai spam email detector',
            category: ['ai', 'showcase'],
            difficulty: 4,
            date: '2026-02-05',
            description: 'AI-powered spam email detection tool.',
            tags: ['python', 'AI', 'Web App', 'Streamlit'],
            demoLink: 'https://ai-spam-classifier-2407.streamlit.app/',
            codeLink: 'https://github.com/saiyam-creator/ai-spam-classifier',
            stats: {
                users: '-',
                rating: '-',
                updates: '-'
            },
            favorite: true
        }
        ,
    {
            id: 'project10',
            title: ' AI Voice Translator',
            category: ['ai', 'showcase'],
            difficulty: 4,
            date: '2026-02-05',
            description: 'AI-powered voice translation tool.',
            tags: ['python', 'AI', 'Web App', 'Hugging Face'],
            demoLink: 'https://huggingface.co/spaces/s143a/ai-voice-translator',
            codeLink: 'https://github.com/saiyam-creator/ai-voice-translator',
            stats: {
                users: '-',
                rating: '-',
                updates: '-'
            },
            favorite: true
        }
         ,
    {
            id: 'project11',
            title: 'Namaste Meerut Restaurant',
            category: ['website'],
            difficulty: 4,
            date: '2026-01-29',
            description: 'A modern, responsive restaurant website showcasing menu items and reservation system.',
            tags: ['HTML', 'CSS', 'JS', 'Three.js', 'Web App'],
            demoLink: 'https://saiyam-creator.github.io/Namaste-Meerut/',
            codeLink: 'https://github.com/saiyam-creator/Namaste-Meerut',
            stats: {
                users: '-',
                rating: '-',
                updates: '-'
            },
            favorite: true
        }

         ,
    {
            id: 'project12',
            title: 'AI content generator',
            category: ['ai', 'showcase'],
            difficulty: 4,
            date: '2026-01-29',
            description: 'AI-powered content generation tool for creating high-quality articles and blog posts.',
            tags: ['python', 'AI', 'Web App', 'Gradio', 'hugging face'],
            demoLink: 'https://huggingface.co/spaces/s143a/instagram',
            codeLink: 'https://github.com/saiyam-creator/ai-content-generator',
            stats: {
                users: '-',
                rating: '-',
                updates: '-'
            },
            favorite: true
        }
        ,
{
    id: 'project13',
    title: 'Whispers — Anonymous Diary Web App',
    category: ['website'],
    difficulty: 6,
    date: '2026-02-13',
    description: 'A live anonymous diary web application where users can safely share thoughts without identity, interaction, or social pressure. Built with secure token-based anonymity, real-time Firebase database, image uploads with moderation checks, and full production deployment.',
    tags: ['JavaScript', 'Firebase', 'Web App', 'Anonymous Platform', 'Realtime Database'],
    demoLink: 'https://mywebsite-ca4b1.web.app/',
    codeLink: null , // change if repo name different
    stats: {
        users: 'Live',
        rating: '—',
        updates: 'Active'
    },
    favorite: true
}

    ];
    }
      async loadProjects() {
        // Return the project data directly
        return this.projectData;
    }
}

     

// ============= PROJECT SECTION STYLES =============
// Add this CSS to your existing styles
const projectStyles = `
/* ========== UPDATED PROJECT CARD STYLES ========== */
.project-card {
    background: linear-gradient(145deg, 
        rgba(30, 30, 30, 0.95), 
        rgba(40, 10, 10, 0.9));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--primary);
    box-shadow: 
        0 25px 50px rgba(255, 0, 0, 0.3),
        0 0 100px rgba(255, 0, 0, 0.1);
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 0, 0, 0.1), 
        transparent);
    transition: left 0.7s ease;
}

.project-card:hover::before {
    left: 100%;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 0, 0, 0.2);
}

.project-title {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--primary);
    background: linear-gradient(135deg, var(--primary), #ff6666);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.project-id {
    font-size: 0.9rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.05);
    padding: 5px 12px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Problem & Solution Sections */
.project-problem,
.project-solution,
.project-tech {
    margin-bottom: 25px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;
    border-left: 4px solid transparent;
    display: flex;
    gap: 15px;
    transition: all 0.3s ease;
}

.project-problem:hover {
    background: rgba(255, 0, 0, 0.05);
    border-left-color: #ff3333;
}

.project-solution:hover {
    background: rgba(0, 255, 0, 0.05);
    border-left-color: #00cc00;
}

.project-tech:hover {
    background: rgba(0, 150, 255, 0.05);
    border-left-color: #0066cc;
}

.section-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-problem .section-icon {
    color: #ff3333;
    background: rgba(255, 0, 0, 0.1);
    border-color: rgba(255, 0, 0, 0.3);
}

.project-solution .section-icon {
    color: #00cc00;
    background: rgba(0, 255, 0, 0.1);
    border-color: rgba(0, 255, 0, 0.3);
}

.project-tech .section-icon {
    color: #0066cc;
    background: rgba(0, 150, 255, 0.1);
    border-color: rgba(0, 150, 255, 0.3);
}

.section-content {
    flex: 1;
}

.section-content h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-light);
}

.project-problem h4 {
    color: #ff3333;
}

.project-solution h4 {
    color: #00cc00;
}

.project-tech h4 {
    color: #0066cc;
}

.section-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-gray);
    margin: 0;
}

/* Tech Tags */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}

.tech-tag {
    background: rgba(0, 150, 255, 0.1);
    color: #0066cc;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    border: 1px solid rgba(0, 150, 255, 0.3);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.tech-tag:hover {
    background: rgba(0, 150, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 150, 255, 0.2);
}

/* Project Tags */
.project-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 20px 0 25px;
}

.tag {
    background: rgba(255, 0, 0, 0.1);
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: var(--primary);
    border: 1px solid rgba(255, 0, 0, 0.3);
    font-weight: 600;
    transition: all 0.3s ease;
}

.tag:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
}

/* Project Actions */
.project-actions {
    display: flex;
    gap: 15px;
    margin-top: auto;
}

.btn-small {
    padding: 12px 25px;
    font-size: 0.95rem;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex: 1;
    position: relative;
    overflow: hidden;
}

.btn-small::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent);
    transition: left 0.6s ease;
}

.btn-small:hover::before {
    left: 100%;
}

.btn-view {
    background: linear-gradient(135deg, var(--primary), #ff3333);
    color: var(--secondary);
    box-shadow: 0 5px 20px rgba(255, 0, 0, 0.3);
}

.btn-view:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--secondary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
}

.btn-icon {
    font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .project-id {
        align-self: flex-start;
    }
    
    .project-problem,
    .project-solution,
    .project-tech {
        flex-direction: column;
        text-align: center;
    }
    
    .section-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto;
    }
    
    .project-actions {
        flex-direction: column;
    }
    
    .btn-small {
        width: 100%;
    }
}

/* Animation for project cards */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-card {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }
.project-card:nth-child(7) { animation-delay: 0.7s; }
.project-card:nth-child(8) { animation-delay: 0.8s; }

/* Status Indicators */
.project-status {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.status-live {
    background: rgba(0, 255, 0, 0.1);
    color: #00cc00;
    border: 1px solid rgba(0, 255, 0, 0.3);
}

.status-beta {
    background: rgba(255, 165, 0, 0.1);
    color: #ff9900;
    border: 1px solid rgba(255, 165, 0, 0.3);
}

/* Project Difficulty Indicator */
.project-difficulty {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
}

.difficulty-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
}

.difficulty-dot.active {
    background: var(--primary);
    box-shadow: 0 0 10px var(--primary);
}
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = projectStyles;
document.head.appendChild(styleSheet);

// ============= INITIALIZE PROJECTS =============
document.addEventListener('DOMContentLoaded', async () => {
    const projectManager = new ProjectManager();
    await projectManager.loadProjects();
    
    // Add click handlers for project buttons
    document.addEventListener('click', (e) => {
        const button = e.target.closest('[data-action]');
        if (!button) return;

        const action = button.getAttribute('data-action');
        const link = button.getAttribute('data-link');

        if (action === 'view-project' || action === 'view-code') {
            if (link && link !== '#') {
                window.open(link, '_blank', 'noopener,noreferrer');
                
                // Add animation feedback
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 200);
            }
        }
    });
    
    console.log('✅ Project section loaded with 8 professional projects!');
});