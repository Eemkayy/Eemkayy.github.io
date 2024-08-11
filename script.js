document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeText = document.getElementById('welcome-text');
    const mainContainer = document.getElementById('main-container');

    const message = "Welcome, curious fellow!";

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            welcomeText.textContent = text.substring(0, i + 1);
            setTimeout(function() {
                typeWriter(text, i + 1, callback);
            }, 100); 
        } else if (callback) {
            setTimeout(callback, 3000); 
        }
    }
    function showMainContent() {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            document.body.classList.add('loaded');
            welcomeScreen.style.display = 'none';
        }, 1000); 
    }
    typeWriter(message, 0, showMainContent);

    function updateMainHeight() {
        const activeSection = document.querySelector(".section.active");
        if (activeSection) {
            mainContainer.style.height = activeSection.offsetHeight + "px";
        }
    }
    updateMainHeight();
    document.querySelectorAll(".nav-link").forEach(navLink => {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetSectionId);
            const currentSection = document.querySelector(".section.active");

            if (currentSection !== targetSection) {
                currentSection.classList.add("outgoing");
                currentSection.classList.remove("active");

                setTimeout(() => {
                    currentSection.classList.add("hidden");
                    currentSection.classList.remove("outgoing");

                    targetSection.classList.remove("hidden");
                    setTimeout(() => {
                        targetSection.classList.add("active");
                        updateMainHeight();
                    }, 10); 
                }, 500); 
            }
        });
    });
    window.addEventListener("resize", updateMainHeight);
});
