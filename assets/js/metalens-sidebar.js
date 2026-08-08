document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.getElementById('metalens-sidebar');
  if (!sidebar) return;

  var header = document.querySelector('.site-header');
  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.id = 'metalens-sidebar-toggle';
  toggle.className = 'metalens-sidebar-toggle';
  toggle.setAttribute('aria-label', 'Toggle Metalens sidebar');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.innerHTML = '<span class="hamburger-icon"><span></span><span></span><span></span></span>';

  var desktopOpen = localStorage.getItem('metalensSidebarOpen');
  var isOpen = desktopOpen === null ? true : desktopOpen === 'true';

  function updateSidebarState(open, save) {
    if (open) {
      sidebar.classList.remove('closed');
      toggle.classList.remove('closed');
      document.body.classList.add('metalens-sidebar-open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      sidebar.classList.add('closed');
      toggle.classList.add('closed');
      document.body.classList.remove('metalens-sidebar-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    if (save) {
      localStorage.setItem('metalensSidebarOpen', open ? 'true' : 'false');
    }
  }

  function handleEscape(event) {
    if (event.key === 'Escape' && window.innerWidth <= 768) {
      closeMobileSidebar();
    }
  }

  function openMobileSidebar() {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileSidebar() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function toggleSidebar(event) {
    event.stopPropagation();
    if (window.innerWidth <= 768) {
      if (sidebar.classList.contains('mobile-open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
      return;
    }
    isOpen = !sidebar.classList.contains('closed');
    updateSidebarState(!isOpen, true);
  }

  var overlay = document.createElement('div');
  overlay.id = 'metalens-sidebar-overlay';
  overlay.className = 'metalens-sidebar-overlay';
  overlay.addEventListener('click', closeMobileSidebar);

  toggle.addEventListener('click', toggleSidebar);
  document.addEventListener('keydown', handleEscape);

  header.querySelector('.header-right').insertBefore(toggle, header.querySelector('.theme-toggle-btn'));
  document.body.appendChild(overlay);

  updateSidebarState(isOpen, false);
});
