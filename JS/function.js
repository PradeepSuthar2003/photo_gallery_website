const getLogin = () => {
    let login = document.getElementById("login_model");
    login.style.display = 'flex';
}

const getSignup = () => {
    let signup = document.getElementById("signup_model");
    signup.style.display = 'flex';
}

const hideModel = () => {
    let login = document.getElementById("login_model");
    login.style.display = 'none';

    let signup = document.getElementById("signup_model");
    signup.style.display = 'none';
}