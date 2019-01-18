// SIGN UP
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // USER EMAIL & PASSWORD
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // SIGN UP PROCESS
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        modal.style.display = "none";
        signupForm.reset();
    });
});

