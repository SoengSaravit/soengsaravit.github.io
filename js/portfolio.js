(() => {
    'use strict';
    const header = document.querySelector('.site-header');
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#navigation');
    const mobileViewport = window.matchMedia('(max-width: 850px)');

    function closeMenu() {
        header.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    // The full navigation remains available without JavaScript.
    header.classList.add('menu-ready');
    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        header.classList.toggle('menu-open', !isOpen);
        menuButton.setAttribute('aria-expanded', String(!isOpen));
    });
    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && header.classList.contains('menu-open')) {
            closeMenu();
            menuButton.focus();
        }
    });
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) closeMenu();
    });
    header.addEventListener('focusout', (event) => {
        if (!header.contains(event.relatedTarget)) closeMenu();
    });
    mobileViewport.addEventListener('change', closeMenu);

    const filters = document.querySelector('.research-filters');
    const filterButtons = [...filters.querySelectorAll('[data-filter]')];
    const projects = [...document.querySelectorAll('[data-category]')];
    const projectCount = document.querySelector('.project-count');
    filters.hidden = false;
    filters.addEventListener('click', (event) => {
        const button = event.target.closest('[data-filter]');
        if (!button) return;
        const category = button.dataset.filter;
        filterButtons.forEach((filter) => {
            const selected = filter === button;
            filter.classList.toggle('is-active', selected);
            filter.setAttribute('aria-pressed', String(selected));
        });
        let count = 0;
        projects.forEach((project) => {
            const visible = category === 'all' || project.dataset.category === category;
            project.hidden = !visible;
            if (visible) count += 1;
        });
        projectCount.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
    });

    // Select the section nearest the top, including while scrolling upward.
    const navLinks = [...document.querySelectorAll('.nav-links a, .nav-contact')];
    const sections = navLinks.map((link) => document.querySelector(link.hash));
    let scrollPending = false;
    function updateActiveSection() {
        const offset = header.getBoundingClientRect().height + 100;
        let activeIndex = 0;
        sections.forEach((section, index) => {
            if (section.getBoundingClientRect().top <= offset) activeIndex = index;
        });
        // The final section can be too short to reach the top of a tall viewport.
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
            activeIndex = navLinks.length - 1;
        }
        navLinks.forEach((link, index) => {
            if (index === activeIndex) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
        scrollPending = false;
    }
    window.addEventListener('scroll', () => {
        if (!scrollPending) {
            scrollPending = true;
            window.requestAnimationFrame(updateActiveSection);
        }
    }, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('load', updateActiveSection);
    updateActiveSection();
    document.querySelector('#year').textContent = new Date().getFullYear();
})();
