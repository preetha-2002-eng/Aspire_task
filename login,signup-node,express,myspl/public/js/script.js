// login page
function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send login credentials to the server for validation
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        window.alert(data.message);
        if (data.redirect) {
            window.location.href = data.redirect;
        }
    })
    .catch(error => {
        console.error('Login error:', error);
        window.alert('Login failed. Please try again.');
    });
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);

// Signup page
function validateForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and confirm password do not match");
        return;
    }

    // Send signup data to the server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, confirmPassword })
    })
    .then(response => {
        if (response.ok) {
            alert('You have successfully registered');
            // Reset the form fields
            document.getElementById("signupForm").reset();
        } else {
            return response.text().then(text => { throw new Error(text) });
        }
    })
    .catch(error => {
        console.error('Registration error:', error);
        alert('Registration failed: ' + error.message);
    });
}

document.getElementById('signupForm').addEventListener('submit', validateForm);
