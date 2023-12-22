// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('bg-light');
  body.classList.toggle('dark-mode');

  const navBar = document.getElementById('globalNavBar');
  navBar.classList.toggle('bg-light');
  navBar.classList.toggle('dark-mode');

  const tables = document.getElementsByTagName('table');
  for (let i = 0; i < tables.length; i++) {
    const element = tables[i];
    element.classList.toggle('table-dark');
  }

// Toggle dark mode for ul and li elements
  const ulElements = document.getElementsByTagName('ul');
  for (let i = 0; i < ulElements.length; i++) {
    const ulElement = ulElements[i];
    ulElement.classList.toggle('dark-mode');
  }

  const liElements = document.getElementsByTagName('li');
  for (let i = 0; i < liElements.length; i++) {
    const liElement = liElements[i];
    liElement.classList.toggle('dark-mode');
  }

 // Toggle dark mode for links with the class 'nav-link'
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.classList.toggle('nav-link-dark');
  }

  // Remove bg-light class from body when dark mode is enabled
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('bg-light');
  }
  
  // Store the dark mode preference in a cookie
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  document.cookie = `darkModeEnabled=${isDarkModeEnabled}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
}

// Function to check if dark mode is enabled in the cookie
function checkDarkModeCookie() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'darkModeEnabled') {
      return value === 'true';
    }
  }
  return false;
}

// Function to check browser-level dark mode preference
function checkBrowserDarkModePreference() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Check if there is no cookie set, and the user has dark mode activated at the browser level
if (!checkDarkModeCookie() && checkBrowserDarkModePreference()) {
  toggleDarkMode();
}

// Listen for the toggle button click event
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', toggleDarkMode);

  // Check the dark mode preference from the cookie and apply it
  const isDarkModeEnabled = checkDarkModeCookie();
  if (isDarkModeEnabled) {
    toggleDarkMode();
    darkModeToggle.checked = true;
  }
}
