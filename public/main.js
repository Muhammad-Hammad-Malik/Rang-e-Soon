document.addEventListener("DOMContentLoaded", function () {
  // Function to detect mobile devices
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // Run this code only if the device is not a mobile phone
  if (!isMobile()) {
    const rootElement = document.getElementById("root");

    // MutationObserver to detect when React has rendered
    const observer = new MutationObserver(() => {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      ScrollReveal().reveal(".header__container h1", scrollRevealOption);
      ScrollReveal().reveal(".header__container h4", {
        ...scrollRevealOption,
        delay: 500,
      });
      ScrollReveal().reveal(".header__container .btn", {
        ...scrollRevealOption,
        delay: 1000,
      });
      ScrollReveal().reveal(
        ".about__container .section__header",
        scrollRevealOption
      );
      ScrollReveal().reveal(".about__container .section__subheader", {
        ...scrollRevealOption,
        delay: 500,
      });
      ScrollReveal().reveal(".about__container .about__flex", {
        ...scrollRevealOption,
        delay: 1000,
      });
      ScrollReveal().reveal(".about__container .btn", {
        ...scrollRevealOption,
        delay: 1500,
      });
      ScrollReveal().reveal(".discover__card", {
        ...scrollRevealOption,
        interval: 500,
      });
      ScrollReveal().reveal(".discover__card__content", {
        ...scrollRevealOption,
        interval: 500,
        delay: 200,
      });
      ScrollReveal().reveal(".blogs__card", {
        duration: 1000,
        interval: 400,
      });
      ScrollReveal().reveal(".journals__card", {
        ...scrollRevealOption,
        interval: 400,
      });

      // Once the elements are revealed, disconnect the observer
      observer.disconnect();
    });

    // Observe the root element for any changes
    observer.observe(rootElement, { childList: true, subtree: true });
  }
});
