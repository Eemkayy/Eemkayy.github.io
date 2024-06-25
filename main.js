document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const dropdownContent = this.nextElementSibling;

            if (dropdownContent.style.maxHeight) {
                dropdownContent.style.maxHeight = null;
                dropdownContent.style.padding = "0 15px";
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
                dropdownContent.style.padding = "15px";
            }
        });
    });
});
