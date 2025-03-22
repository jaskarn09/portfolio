document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const navbar = document.getElementById("navbar");

  // Check local storage for saved theme
  if (localStorage.getItem("theme") === "dark") {
      enableDarkMode();
  } else {
      enableLightMode();
  }

  toggleButton.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
          enableLightMode();
      } else {
          enableDarkMode();
      }
  });

  function enableDarkMode() {
      body.classList.add("dark-mode");
      navbar.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      toggleButton.innerHTML = "🌙"; // White Moon
      toggleButton.style.color = "white";
  }

  function enableLightMode() {
      body.classList.remove("dark-mode");
      navbar.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      toggleButton.innerHTML = "☀️"; // Black Sun
      toggleButton.style.color = "black";
  }
});
// scroll up
    // Get the button
    const scrollBtn = document.getElementById("scroll-btn");
    
    // When the user scrolls down 300px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.classList.add("visible");
        } else {
            scrollBtn.classList.remove("visible");
        }
    };
    
    // When the user clicks on the button, scroll to the top of the document
    scrollBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });