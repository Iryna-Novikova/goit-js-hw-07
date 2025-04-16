let sbmtFormElem = document.querySelector('.login-form');

sbmtFormElem.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const sbmtForm = event.target;
    const email= sbmtForm.elements.email.value.trim();
    const pswrd = sbmtForm.elements.password.value.trim();
    const user = {
        email: '',
        password: '',
    }
    
    if (email === "" || pswrd === "") {
        alert("All form fields must be filled in");
    } else {
        user.email = email;  
        user.password = pswrd;
        console.log(user);
        sbmtForm.reset();
    }
  
} 