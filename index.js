/* ============================================================
   PORTFOLIO CONFIGURATION - EASILY EDITABLE PROJECT DATA
   Replace your YouTube channel link, video URLs, and project details here.
   ============================================================ */
window.PORTFOLIO_CONFIG = {
  youtubeChannelUrl: "https://www.youtube.com/@riteshwho",
  instagramUrl: "https://www.instagram.com/ritesh.videoedit/",
  
  // 01 — SHORT FORM CONTENT (9:16 Aspect Ratio)
  shortFormProjects: [
    {
      id: "01",
      badge: "REEL 01",
      title: "Rally Car Edit",
      tags: "Speed Ramps · Sound Design · Transitions",
      thumbnail: "images/rally_car_custom.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=lObSyFfj4L4"
    },
    {
      id: "02",
      badge: "REEL 02",
      title: "Talking Head Edit",
      tags: "Motion Graphics · Captions · Storytelling",
      thumbnail: "images/talking_head_custom.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=Y2uZMS3NfVY"
    }
  ],

  // 02 — LONG FORMAT VIDEOS (16:9 Aspect Ratio)
  longFormProjects: [
    {
      id: "03",
      category: "AI & TECH",
      title: "Notebook LLM 5",
      metadata: "Tech Explainer | 2024",
      year: "2024",
      description: "A clean, fast-paced technical breakdown with engaging visual pacing and motion graphics.",
      thumbnail: "images/notebook_llm_custom.png",
      youtubeUrl: "https://www.youtube.com/watch?v=Bjh5IyHu7xg"
    },
    {
      id: "04",
      category: "BUSINESS / EXPLAINER",
      title: "Investing in right business",
      metadata: "Business / Explainer Video | 2026",
      year: "2026",
      description: "A data-driven explainer with crisp audio, focused narrative structure, and dynamic editorial cuts.",
      thumbnail: "images/investing_in_right_business.png",
      youtubeUrl: "https://youtu.be/FV93jNnzW0M"
    },
    {
      id: "05",
      category: "PODCAST EDIT",
      title: "Gut Health Podcast Intro",
      metadata: "Podcast Edit | 2024",
      year: "2024",
      description: "Polished studio podcast edit with smooth pacing, audio balancing, and cinematic motion graphics.",
      thumbnail: "images/gut_health_custom.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=3nsIvsExMWg"
    }
  ]
};

// Initialize interactive click behavior and dynamic links
function initPortfolioProjects() {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  // Sync YouTube Channel buttons
  const channelBtns = document.querySelectorAll('#youtube-channel-btn, #youtube-channel-btn-mobile');
  channelBtns.forEach((btn) => {
    if (btn && config.youtubeChannelUrl) {
      btn.href = config.youtubeChannelUrl;
    }
  });

  // Sync Instagram buttons
  const instaBtns = document.querySelectorAll('.instagram-channel-btn');
  instaBtns.forEach((btn) => {
    if (btn && config.instagramUrl) {
      btn.href = config.instagramUrl;
    }
  });

  // Short-form Reel Card click behavior: Clicking opens YouTube video in new tab
  const reelCards = document.querySelectorAll('.reel-card');
  reelCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const url = card.getAttribute('data-youtube-url');
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });

  // Long-form Video Card click behavior: Clicking opens YouTube video in new tab
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach((card) => {
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

