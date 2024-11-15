// Initialize Telegram Web App
const telegram = window.Telegram.WebApp;

// Dynamically populate user data from Telegram
document.addEventListener('DOMContentLoaded', () => {
  const userInfo = telegram.initDataUnsafe.user;

  if (userInfo) {
    document.getElementById('username').innerText = userInfo.first_name;
  } else {
    document.getElementById('username').innerText = "Guest";
  }

  // Expand the web app
  telegram.expand();
});

// Handle Like and Skip Actions
document.querySelector('.like-btn').addEventListener('click', () => {
  alert('You liked this profile!');
});

document.querySelector('.skip-btn').addEventListener('click', () => {
  alert('You skipped this profile!');
});
