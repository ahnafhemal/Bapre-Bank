document.getElementById('login-submit').addEventListener('click', function () {
    //user Email called
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;
    //use Password called
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == '12345') {
        window.location.href = 'banking.html'
    }
})