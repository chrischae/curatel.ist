const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const accountDetails = document.querySelector('.account-details');

// NAVBAR SETUP
const setupUI = (user) => {
    
    if (user) {
        const accountDetail = `<div>Logged in as ${user.email}</div>`;
        accountDetails.innerHTML = accountDetail;

        // NAV BAR
        console.log(loggedInLinks);

        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};