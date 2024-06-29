document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                if (section.classList.contains('active')) {
                    section.classList.add('outgoing');
                    setTimeout(() => {
                        section.classList.remove('active', 'outgoing');
                    }, 500); 
                }
            });

            targetSection.classList.add('incoming');
            setTimeout(() => {
                targetSection.classList.remove('incoming');
                targetSection.classList.add('active');
            }, 10); 
        });
    });
});
