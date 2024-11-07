import gsap from "gsap";

// Configuration
const BANNER_CONFIG = {
  ids: ["banner-1", "banner-2", "banner-3", "banner-4"],
  colors: [
    "rgba(249, 115, 22, 0.9)", // orange-500
    "rgba(234, 88, 12, 0.9)",  // orange-600
    "rgba(194, 65, 12, 0.9)",  // orange-700
    "rgba(154, 52, 18, 0.9)",  // orange-800
  ],
  duration: 0.8,
  stagger: 0.1,
  ease: "power4.inOut",
};

// Helper function to get all banners
const getBanners = () => {
  return BANNER_CONFIG.ids.map(id => document.getElementById(id));
};

// Helper function to initialize banners with gradients
const initBanners = (banners) => {
  banners.forEach((banner, index) => {
    if (banner) {
      banner.style.background = `linear-gradient(to bottom, ${BANNER_CONFIG.colors[index]}, ${BANNER_CONFIG.colors[index]})`;
      banner.style.boxShadow = "0 0 30px rgba(0, 0, 0, 0.1)";
    }
  });
};

export const animatePageIn = () => {
  const banners = getBanners();

  if (banners.every(banner => banner)) {
    initBanners(banners);

    const tl = gsap.timeline({
      defaults: {
        ease: BANNER_CONFIG.ease,
        duration: BANNER_CONFIG.duration,
      },
    });

    // Initial state
    tl.set(banners, {
      yPercent: 0,
      opacity: 1,
    });

    // Main animation
    tl.to(banners, {
      yPercent: 100,
      stagger: BANNER_CONFIG.stagger,
      opacity: 0.8,
    }).to(banners, {
      opacity: 0,
      duration: 0.3,
      stagger: BANNER_CONFIG.stagger / 2,
    });

    // Optional: Add some particles or additional effects
    banners.forEach((banner) => {
      if (banner) {
        addParticleEffect(banner);
      }
    });
  }
};

export const animatePageOut = (href, router) => {
  const banners = getBanners();

  if (banners.every(banner => banner)) {
    initBanners(banners);

    const tl = gsap.timeline({
      defaults: {
        ease: BANNER_CONFIG.ease,
        duration: BANNER_CONFIG.duration,
      },
    });

    // Initial state
    tl.set(banners, {
      yPercent: -100,
      opacity: 0,
    });

    // Main animation
    tl.to(banners, {
      opacity: 1,
      duration: 0.3,
      stagger: BANNER_CONFIG.stagger / 2,
    }).to(banners, {
      yPercent: 0,
      stagger: BANNER_CONFIG.stagger,
      onComplete: () => {
        router.push(href);
      },
    });

    // Optional: Add ripple effect
    banners.forEach((banner) => {
      if (banner) {
        addRippleEffect(banner);
      }
    });
  }
};

// Optional: Particle effect function
const addParticleEffect = (element) => {
  const particles = 12;
  const colors = ["#f97316", "#ea580c", "#c2410c"];

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    gsap.set(particle, {
      position: "absolute",
      x: gsap.utils.random(0, element.offsetWidth),
      y: gsap.utils.random(0, element.offsetHeight),
      width: gsap.utils.random(4, 8),
      height: gsap.utils.random(4, 8),
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: "50%",
    });

    element.appendChild(particle);

    gsap.to(particle, {
      y: `+=${gsap.utils.random(50, 100)}`,
      x: `+=${gsap.utils.random(-50, 50)}`,
      opacity: 0,
      duration: gsap.utils.random(0.8, 1.2),
      ease: "power2.out",
      onComplete: () => particle.remove(),
    });
  }
};

// Optional: Ripple effect function
const addRippleEffect = (element) => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  gsap.set(ripple, {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 0,
    height: 0,
    border: "2px solid rgba(249, 115, 22, 0.3)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  });

  element.appendChild(ripple);

  gsap.to(ripple, {
    width: element.offsetWidth * 2,
    height: element.offsetWidth * 2,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => ripple.remove(),
  });
};
