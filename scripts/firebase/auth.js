// AUTH STATE
auth.onAuthStateChanged(user => {

    if (user) {
        console.log('LOGGED IN USER:', user);

        // Get data from firestore
        db.collection('categories').onSnapshot(snapshot => {
            setupUI(user);
        });
    }

});

// SIGN UP
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // User email & password
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Sign Up process
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log('SIGN UP SUCCESS');

        const modal = document.querySelector('#modal-signup');
        modal.style.display = "none";
        signupForm.reset();
    });
});

// LOGIN
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // User email & password
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log('LOG-IN SUCCESS');

        const modal = document.querySelector('#modal-login');
        modal.style.display = "none";
        loginForm.reset();
    });
});

//LOGOUT
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('USER SIGNED OUT');
    });
});