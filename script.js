var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Please enter a valid email address';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }

    // Form is valid - show success message
    submitError.style.display = 'block';
    submitError.style.color = 'green';
    submitError.innerHTML = 'Form submitted successfully!';

    // Clear form after successful submission
    setTimeout(function () {
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-phone').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';

        // Clear all validation messages
        nameError.innerHTML = '';
        phoneError.innerHTML = '';
        emailError.innerHTML = '';
        messageError.innerHTML = '';
        submitError.style.display = 'none';
    }, 2000);

    return false; // Prevent actual form submission for demo
}