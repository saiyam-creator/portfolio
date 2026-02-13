
    // ========== ROTARY DIAL MANAGER ==========
class RotaryDialManager {
    constructor() {
        this.dial = document.getElementById('rotaryDial');
        this.certificates = [];
        this.badges = [];
        this.currentTab = 'certificates';
        this.init();
    }
    
    init() {
        console.log('RotaryDialManager initializing...');
        this.setupEventListeners();
        this.setupHoverEffects();
        this.loadSampleData();
        
        // Check if dial element exists
        if (!this.dial) {
            console.error('❌ Rotary dial element not found!');
            return;
        }
        
        console.log('✅ RotaryDialManager initialized');
    }
    
    setupEventListeners() {
        if (!this.dial) return;
        
        // Click to open achievements modal
        this.dial.addEventListener('click', (e) => {
            console.log('Rotary dial clicked');
            e.stopPropagation();
            this.openAchievementsModal();
        });
        
        // Add click animation
        this.dial.addEventListener('mousedown', () => {
            this.animateClick();
        });
        
        // Double click for fun effect
        this.dial.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            this.animateDoubleClick();
        });
    }
    
    setupHoverEffects() {
        if (!this.dial) return;
        
        let hoverTimer;
        
        this.dial.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimer);
            hoverTimer = setTimeout(() => {
                this.animateHover();
            }, 100);
        });
        
        this.dial.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
            this.resetHover();
        });
    }
    
    openAchievementsModal() {
        console.log('Opening achievements modal...');
        const modal = document.getElementById('achievementsModal');
        if (!modal) {
            console.error('❌ Achievements modal not found!');
            return;
        }
        
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        // Load and render data
        this.renderCertificates();
        this.renderBadges();
        this.updateCounts();
        
        // Add dial click effect
        this.animateDialSpin();
        
        console.log('✅ Modal opened');
    }
    
    closeModal() {
        const modal = document.getElementById('achievementsModal');
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
    
    loadSampleData() {
        // Sample certificates data
        this.certificates = [
            {
                id: 'cert-001',
                title: 'Vibe coding',
                issuer: 'IBM',
                date: '2026-02-02',
                image: 'https://i.ibb.co/Gvdvcvdd/Screenshot-2026-02-03-092007.png',
                description: 'Learned to build applications using Vibe Coding platform',
                credentialId: 'ALM-COURSE_4061457',
                verified: true
            },
            {
                id: 'cert-002',
                title: 'First chatbot',
                issuer: 'IBM',
                date: '2026-01-29',
                image: 'https://i.ibb.co/xqyNVF63/Screenshot-2026-02-02-170858.png',
                description: 'Built my first chat bot using IBM watson assistant',
                credentialId: 'ALM-COURSE_3946111',
                verified: true
            },
            {
                id: 'cert-003',
                title: 'Introduction to LLM',
                issuer: 'IBM',
                date: '2026-01-28',
                image: 'https://i.ibb.co/sd6ZrvJv/Screenshot-2026-02-02-170934.png',
                description: 'Completed introduction to large language models',
                credentialId: 'ALM-COURSE_4058915',
                verified: true
            }
            ,
            {
                id: 'cert-004',
                title: 'prompt engineering',
                issuer: 'IBM',
                date: '2026-01-30',
                image: 'https://i.ibb.co/rGKT0t6v/Screenshot-2026-02-02-170611.png',
                description: 'Mastered prompt engineering techniques for AI interactions',
                credentialId: 'ALM-COURSE_4058600',
                verified: true
            }
             ,
            {
                id: 'cert-005',
                title: 'Artificial Intelligence intern at Codec Technologies',
                issuer: 'Codec Technologies',
                date: '2026-02-09',
                image: 'https://i.ibb.co/bRzj9qQ6/Screenshot-2026-02-09-180157.png',
                description: 'Completed internship in Artificial Intelligence at Codec Technologies',
                credentialId: '-',
                verified: true
            }
        ];
        
        // Sample badges data
        this.badges = [
            {
                id: 'badge-001',
                title: 'Introduction to LLM',
                issuer: 'IBM',
                date: '2026-1-28',
                image: 'https://i.ibb.co/XxmfxMMK/Digital-Sticker-Introduction-to-Large-Language-Models.png',
                description: 'Completed introduction to large language models',
                credentialId: '-',
                verified: true
            },
            {
                id: 'badge-002',
                title: 'build my first chatbot',
                issuer: 'IBM',
                date: '2026-01-29',
                image: 'https://i.ibb.co/wF4zfv1Y/Build-Your-First-Chatbot.png',
                description: 'Completed first chatbot project using AI',
                credentialId: '-',
                verified: true
            },
            {
                id: 'badge-003',
                title: 'prompt engineering',
                issuer: 'IBM',
                date: '2026-01-30',
                image: 'https://i.ibb.co/B2bxsTW1/Prompt-Engineering-Shaping-Better-AI-Responses.png',
                description: 'Mastered prompt engineering techniques for AI interactions',
                credentialId: '-',
                verified: true
            }
            ,
            {
                id: 'badge-004',
                title: 'vibe coding',
                issuer: 'IBM',
                date: '2026-01-31',
                image: 'https://i.ibb.co/ZpV6rm8P/Turn-Ideas-into-Reality-with-Vibe-Coding.png',
                description: 'Learned to build applications using Vibe Coding platform',
                credentialId: '-',
                verified: true
            }
              ,
            {
                id: 'badge-005',
                title: 'Data Analysis Course 1',
                issuer: 'Google',
                date: '2026-01-31',
                image: 'https://i.ibb.co/0pb3NMnw/Whats-App-Image-2026-01-29-at-2-48-44-PM.jpg',
                description: 'Completed data analysis course 1 by Google',
                credentialId: '-',
                verified: true
            }
              ,
            {
                id: 'badge-006',
                title: 'Responsible AI',
                issuer: 'Google Cloud',
                date: '2026-01-31',
                image: 'https://i.ibb.co/mrvJ7RXq/Whats-App-Image-2026-01-29-at-8-12-15-AM.jpg',
                description: 'Completed Responsible AI course by Google Cloud',
                credentialId: '-',
                verified: true
            }
              ,
            {
                id: 'badge-007',
                title: 'Generative AI',
                issuer: 'Google Cloud',
                date: '2026-01-31',
                image: 'https://i.ibb.co/N2tYvpBq/Whats-App-Image-2026-01-29-at-8-12-15-AM-1.jpg',
                description: 'Generative AI course by Google Cloud',
                credentialId: '-',
                verified: true
            }
        ];
    }
    
    renderCertificates() {
        const container = document.getElementById('certificatesGrid');
        if (!container) {
            console.error('Certificates grid container not found');
            return;
        }
        
        if (this.certificates.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📜</div>
                    <h3>No Certificates Found</h3>
                    <p>Certificates will appear here when added</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = this.certificates.map((cert, index) => `
            <div class="certificate-card" style="animation-delay: ${(index + 1) * 0.1}s">
                ${cert.verified ? '<div class="certificate-status status-verified">Verified</div>' : 
                                 '<div class="certificate-status status-pending">Pending</div>'}
                
                <div class="certificate-image">
                    <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                </div>
                
                <div class="certificate-content">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <div class="certificate-issuer">${cert.issuer}</div>
                    <div class="certificate-date">${this.formatDate(cert.date)}</div>
                    <p class="certificate-description">${cert.description}</p>
                    
                    ${cert.credentialId ? `
                        <div class="certificate-credential" onclick="copyToClipboard('${cert.credentialId}', 'Credential ID')">
                            <span class="credential-icon">🔑</span>
                            <span class="certificate-credential-id">${cert.credentialId}</span>
                            <span class="copy-hint">Click to copy</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
    
    renderBadges() {
        const container = document.getElementById('badgesGrid');
        if (!container) {
            console.error('Badges grid container not found');
            return;
        }
        
        if (this.badges.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🏆</div>
                    <h3>No Badges Found</h3>
                    <p>Badges will appear here when added</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = this.badges.map((badge, index) => `
            <div class="badge-card" style="animation-delay: ${(index + 1) * 0.1}s">
                ${badge.verified ? '<div class="badge-status status-verified">Verified</div>' : 
                                 '<div class="badge-status status-pending">Pending</div>'}
                
                <div class="badge-image">
                    <img src="${badge.image}" alt="${badge.title}" loading="lazy">
                </div>
                
                <div class="badge-content">
                    <h3 class="badge-title">${badge.title}</h3>
                    <div class="badge-issuer">${badge.issuer}</div>
                    <div class="badge-date">${this.formatDate(badge.date)}</div>
                    <p class="badge-description">${badge.description}</p>
                    
                    ${badge.credentialId ? `
                        <div class="badge-credential" onclick="copyToClipboard('${badge.credentialId}', 'Credential ID')">
                            <span class="credential-icon">🔑</span>
                            <span class="badge-credential-id">${badge.credentialId}</span>
                            <span class="copy-hint">Click to copy</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
    
    updateCounts() {
        // Update certificate count
        const certCount = document.getElementById('certificatesCount');
        if (certCount) {
            certCount.textContent = this.certificates.length;
        }
        
        // Update badge count
        const badgeCount = document.getElementById('badgesCount');
        if (badgeCount) {
            badgeCount.textContent = this.badges.length;
        }
        
        // Update rotary dial badge
        this.updateAchievementCount();
    }
    
    updateAchievementCount() {
        if (!this.dial) return;
        
        const totalCount = this.certificates.length + this.badges.length;
        
        // Remove existing badge if any
        const existingBadge = this.dial.querySelector('.achievement-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        // Add new badge if there are achievements
        if (totalCount > 0) {
            const badge = document.createElement('div');
            badge.className = 'achievement-badge';
            badge.textContent = totalCount > 9 ? '9+' : totalCount;
            badge.title = `${totalCount} Achievements`;
            this.dial.appendChild(badge);
        }
    }
    
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    animateClick() {
        if (!this.dial) return;
        
        const center = this.dial.querySelector('.rotary-center');
        if (!center) return;
        
        // Scale down effect
        center.style.transform = 'translate(-50%, -50%) scale(0.9)';
        
        setTimeout(() => {
            center.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 150);
        
        // Add ripple effect
        this.createRippleEffect();
    }
    
    animateDoubleClick() {
        if (!this.dial) return;
        
        const ring = this.dial.querySelector('.rotary-ring');
        const icon = this.dial.querySelector('.rotary-icon');
        if (!ring || !icon) return;
        
        // Fast spin animation
        ring.style.animation = 'rotateRing 0.5s linear';
        icon.style.animation = 'bounceIcon 0.2s ease infinite alternate';
        
        // Change icon temporarily
        const originalIcon = icon.textContent;
        icon.textContent = '⚡';
        
        setTimeout(() => {
            ring.style.animation = '';
            icon.style.animation = '';
            icon.textContent = originalIcon;
        }, 500);
    }
    
    animateHover() {
        if (!this.dial) return;
        
        const ring = this.dial.querySelector('.rotary-ring');
        const sparkles = this.dial.querySelectorAll('.sparkle');
        
        if (ring) {
            ring.style.animationDuration = '10s';
        }
        
        if (sparkles.length > 0) {
            sparkles.forEach(sparkle => {
                sparkle.style.boxShadow = '0 0 15px white';
            });
        }
    }
    
    resetHover() {
        if (!this.dial) return;
        
        const ring = this.dial.querySelector('.rotary-ring');
        const sparkles = this.dial.querySelectorAll('.sparkle');
        
        if (ring) {
            ring.style.animationDuration = '20s';
        }
        
        if (sparkles.length > 0) {
            sparkles.forEach(sparkle => {
                sparkle.style.boxShadow = '0 0 10px white';
            });
        }
    }
    
    animateDialSpin() {
        if (!this.dial) return;
        
        const ring = this.dial.querySelector('.rotary-ring');
        const icon = this.dial.querySelector('.rotary-icon');
        
        if (ring) {
            ring.style.animation = 'rotateRing 0.8s linear';
        }
        
        if (icon) {
            icon.style.transform = 'scale(1.3)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 300);
        }
        
        setTimeout(() => {
            if (ring) {
                ring.style.animation = 'rotateRing 20s linear infinite';
            }
        }, 1000);
    }
    
    createRippleEffect() {
        if (!this.dial) return;
        
        const ripple = document.createElement('div');
        ripple.className = 'rotary-ripple';
        
        const dialRect = this.dial.getBoundingClientRect();
        const size = dialRect.width * 2;
        
        ripple.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            left: ${dialRect.left + dialRect.width/2 - size/2}px;
            top: ${dialRect.top + dialRect.height/2 - size/2}px;
            background: radial-gradient(circle, 
                rgba(255, 0, 0, 0.3) 0%, 
                rgba(255, 0, 0, 0.1) 50%, 
                transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 998;
            animation: rippleExpand 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Add ripple animation to CSS
const rotaryStyles = document.createElement('style');
rotaryStyles.textContent = `
@keyframes rippleExpand {
    from {
        transform: scale(0.5);
        opacity: 0.8;
    }
    to {
        transform: scale(2);
        opacity: 0;
    }
}

.rotary-ripple {
    animation: rippleExpand 0.6s ease-out forwards;
}
`;
document.head.appendChild(rotaryStyles);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Rotary Dial...');
    
    // Initialize rotary dial manager
    const rotaryDialManager = new RotaryDialManager();
    
    // Setup modal close button
    const closeBtn = document.getElementById('closeAchievements');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            rotaryDialManager.closeModal();
        });
    }
    
    // Setup modal background click
    const modal = document.getElementById('achievementsModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('achievements-modal')) {
                rotaryDialManager.closeModal();
            }
        });
    }
    
    // Setup tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            // Update active tab button
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.tab === tab);
            });
            
            // Update active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.toggle('active', content.id === `${tab}Tab`);
            });
        });
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
            rotaryDialManager.closeModal();
        }
    });
    
    // Global copy to clipboard function
    window.copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            
            // Show notification
            const notification = document.createElement('div');
            notification.className = 'notification success';
            notification.innerHTML = `
                <div class="notification-content">
                    <p>✅ ${type} copied to clipboard!</p>
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 3000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    
    console.log('✅ Rotary Dial Manager initialized successfully');
});
