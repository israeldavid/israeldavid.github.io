document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            // Toggle the open states for both the button and the sidebar
            menuToggle.classList.toggle('is-open');
            sidebar.classList.toggle('is-open');
            
            // Prevent scrolling on the body when menu is open on mobile
            if (sidebar.classList.contains('is-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close menu when clicking on a link (useful for mobile overlay)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('is-open');
                sidebar.classList.remove('is-open');
                document.body.style.overflow = '';
            }
            
            // Optional: Handle the active link state visually
            document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
