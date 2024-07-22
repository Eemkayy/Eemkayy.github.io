document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const mainContainer = document.querySelector("main");

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
