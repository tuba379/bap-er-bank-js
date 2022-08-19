// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.1: set id on the html element
    // 3.2: get the element
    // 3.3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VARIFY email password on the client side
    // step-4: varify email and password and check whether valid user or not 
    if(email === 'abcd@gmail.com' && password === 'abcd1234'){
        window.location.href='bank.html';
    }
    else{
        alert('মাথায় কি ঘিলু নাই..?!😡')
    }
});