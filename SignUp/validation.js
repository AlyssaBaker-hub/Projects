const form = document.getElementById('form');
const username = document.getElementById('username-input');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const password2 = document.getElementById('password2-input');
const error_message = document.getElementById('error-message');
form.addEventListener('submit', (e) => {
    //e.preventDefault() Prevent Submit
    let errors = [];
    
    if (username_input){
        // If we have a username input then we are in the Sign Up page
        errors = getSignUpErrors(username_input.value, email_input.value, password_input.value, password2_input.value);
    }
    else{
        // If we don't have a username input then we are in the Login page
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if(errors.length > 0){
        // If there are any errors
        e.preventDefault();
        error_message.innerText = errors.join(",");
    }
})

function getSignUpFormErrors(username, email, password, password2){
    let errors = [];
    
    if(username === '' || username == null){
        errors.push('Username is required');
        username_input.parentElement.classlist.add('error')
    }
    if(email === '' || email == null){
        errors.push('Email is required');
        firstnemail_input.parentElement.classlist.add('error')
    }          ElementInternals
    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classlist.add('error')
    }
    if(password2.length < 8){
        errors.push('Password must be at least 8 characters');
        password2_input.parentElement.classlist.add('error')
    }
    if(password2 !== repeatpassword){
    errors.push('Passwords do not match');
    password2_input.parentElement.classlist.add('error')
    repeat_password_input.parentElement.classlist.add('error')
}
    

return errors;
}

function getLoginFormErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('Email is required');
        firstnemail_input.parentElement.classlist.add('error')
    }          ElementInternals
    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classlist.add('error')
    }
   
    return errors;
}
    
const allInputs = [username_input, email_input, password_input, password2_input].filter(input => input !== null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.remove('error')){
            input.parentElement.classlist.remove('error');
            error_message.innerText = ''
        }
    })
})