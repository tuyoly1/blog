const HLS_SOURCE = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector("#site-menu");
const internalLinks = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector(".site-header");
const roleWord = document.querySelector("#role-word");
const heroVideo = document.querySelector("#hero-video");

const closeMenu = () => {
  navLinks?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
};

const initVideo = () => {
  if (!heroVideo) return;

  const markReady = () => {
    heroVideo.classList.add("is-ready");
  };

  heroVideo.addEventListener("canplay", markReady, { once: true });

  if (window.Hls?.isSupported()) {
    const hls = new window.Hls({ enableWorker: true });
    hls.loadSource(HLS_SOURCE);
    hls.attachMedia(heroVideo);
    hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
      heroVideo.play().catch(() => {});
    });
    return;
  }

  if (heroVideo.canPlayType("application/vnd.apple.mpegurl")) {
    heroVideo.src = HLS_SOURCE;
    heroVideo.play().catch(() => {});
  }
};

const initRoleCycle = () => {
  if (!roleWord) return;

  const roles = ["Security", "Web", "AI Tools", "Automation"];
  let index = 0;

  window.setInterval(() => {
    index = (index + 1) % roles.length;
    roleWord.textContent = roles[index];
    roleWord.style.animation = "none";
    roleWord.offsetHeight;
    roleWord.style.animation = "";
  }, 2200);
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 100);
};

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId.length <= 1) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", targetId);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
initRoleCycle();
initVideo();
