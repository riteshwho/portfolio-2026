/* ============================================================
   PORTFOLIO CONFIGURATION - EASILY EDITABLE PROJECT DATA
   Replace your YouTube channel link, video URLs, and project details here.
   ============================================================ */
window.PORTFOLIO_CONFIG = {
  youtubeChannelUrl: "https://www.youtube.com/@riteshwho",
  projects: [
    {
      id: "01",
      category: "MOTION GRAPHICS",
      title: "futurepedia v2",
      metadata: "Motion Graphics | 2024",
      year: "2024",
      duration: "0:14",
      description: "A quick, high-impact motion graphics piece with bold visuals and smooth transitions.",
      thumbnail: "https://img.youtube.com/vi/FcdxPQG6LtE/maxresdefault.jpg",
      fallbackThumbnail: "https://img.youtube.com/vi/FcdxPQG6LtE/hqdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=FcdxPQG6LtE"
    },
    {
      id: "02",
      category: "EXPLAINER",
      title: "AI LITERACY VIDEO",
      metadata: "Explainer Video | 2024",
      year: "2024",
      duration: "0:58",
      description: "A data-driven explainer on AI literacy with clean visuals, clear structure and impactful messaging.",
      thumbnail: "https://img.youtube.com/vi/sBrZnyilBKs/maxresdefault.jpg",
      fallbackThumbnail: "https://img.youtube.com/vi/sBrZnyilBKs/hqdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=sBrZnyilBKs"
    },
    {
      id: "03",
      category: "SHORT FORM",
      title: "theo t3",
      metadata: "Short Form Edit | 2024",
      year: "2024",
      duration: "0:27",
      description: "A sharp, minimal edit with a clean, modern look and engaging pacing.",
      thumbnail: "https://img.youtube.com/vi/WEdmOVyOpb8/maxresdefault.jpg",
      fallbackThumbnail: "https://img.youtube.com/vi/WEdmOVyOpb8/hqdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=WEdmOVyOpb8"
    },
    {
      id: "04",
      category: "PODCAST EDIT",
      title: "Gut health podcast intro",
      metadata: "Podcast Edit | 2024",
      year: "2024",
      duration: "0:27",
      description: "A short intro edit for a gut health podcast, with clean visuals and smooth motion.",
      thumbnail: "https://img.youtube.com/vi/3nsIvsExMWg/maxresdefault.jpg",
      fallbackThumbnail: "https://img.youtube.com/vi/3nsIvsExMWg/hqdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=3nsIvsExMWg"
    }
  ]
};

// Initialize projects showcase and YouTube links
function initPortfolioProjects() {
  const container = document.getElementById('projects-grid');
  const channelBtn = document.getElementById('youtube-channel-btn');
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  if (channelBtn && config.youtubeChannelUrl) {
    channelBtn.href = config.youtubeChannelUrl;
  }

  if (!container || !config.projects || !config.projects.length) return;

  container.innerHTML = config.projects.map((project, index) => {
    const num = project.id || String(index + 1).padStart(2, '0');
    const fallbackSrc = project.fallbackThumbnail || `https://img.youtube.com/vi/${project.youtubeUrl.split('v=')[1]}/hqdefault.jpg`;
    return `
      <article
        class="work-card p-4 sm:p-5 flex flex-col justify-between group cursor-pointer"
        data-project-id="${num}"
        data-youtube-url="${project.youtubeUrl}"
      >
        <div>
          <!-- Top metadata: Number, accent bar, category -->
          <div class="flex items-center gap-2 mb-3.5">
            <span class="text-xs font-bold font-mono text-[#E53935]">${num}</span>
            <span class="w-3.5 h-[1.5px] bg-[#E53935] inline-block"></span>
            <span class="text-[11px] font-bold uppercase tracking-[0.16em] text-white/90">${project.category}</span>
          </div>

          <!-- 16:9 Thumbnail container with play button overlay -->
          <a
            href="${project.youtubeUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="block relative work-thumb-container focus:outline-none focus:ring-2 focus:ring-[#E53935] mb-4"
            aria-label="Watch ${project.title} on YouTube"
          >
            <img
              src="${project.thumbnail}"
              onerror="this.onerror=null; this.src='${fallbackSrc}';"
              alt="${project.title} - Video Thumbnail"
              class="work-thumb-img"
              loading="lazy"
            />
            <div class="work-thumb-overlay"></div>

            <!-- Centered Circular Play Button -->
            <div class="work-play-badge" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <!-- Timestamp / Duration Badge (if provided) -->
            ${project.duration ? `
              <div class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-sm text-[11px] font-mono font-semibold text-white/95 pointer-events-none tracking-tight">
                ${project.duration}
              </div>
            ` : ''}
          </a>

          <!-- Project Title -->
          <h3 class="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1 m-0">
            <a
              href="${project.youtubeUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-[#E53935] transition-colors no-underline text-white"
            >
              ${project.title}
            </a>
          </h3>

          <!-- Category / metadata -->
          <div class="text-xs font-medium text-neutral-400 mb-3">
            ${project.metadata || `${project.category} | ${project.year}`}
          </div>

          <!-- Short project description -->
          <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-5 m-0">
            ${project.description}
          </p>
        </div>

        <!-- Watch on YouTube CTA link -->
        <div class="pt-2">
          <a
            href="${project.youtubeUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="work-cta-link inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E53935] hover:underline no-underline"
            aria-label="Watch ${project.title} on YouTube"
          >
            <span>WATCH ON YOUTUBE</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>
    `;
  }).join('');

  // Card click behavior: Clicking any non-link part of the card opens the video in a new tab
  container.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const url = card.getAttribute('data-youtube-url');
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioProjects);
} else {
  initPortfolioProjects();
}

// Mobile navigation drawer toggle for HeroSection
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      if (menuIconOpen) menuIconOpen.classList.add('hidden');
      if (menuIconClose) menuIconClose.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
    });
  });
}

// Backward compatibility for legacy nav toggle if present
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}

if (navLinks) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });
}

