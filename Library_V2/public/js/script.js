document.addEventListener('DOMContentLoaded', function() {
    // Login page
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
            return response.json();
        })
        .then(data => {
            alert(data.message);
            if (data.redirect) {
                window.location.href = data.redirect;
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        });
    }
    
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Signup page
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
    
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, confirmPassword })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error registering user');
        });
    });
    
    // // Add book
    // document.getElementById('add').addEventListener('submit', function(event) {
    //     event.preventDefault();
    
    //     const id = document.getElementById('id').value;
    //     const title = document.getElementById('title').value;
    //     const author = document.getElementById('author').value;
    
    //     fetch('/addBook', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id, title, author })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         alert(data.message);
    //         if (data.message === 'Book added successfully') {
    //             redirectToPage('view.html');
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error adding book:', error);
    //         alert('Error adding book');
    //     });
    // });

    
    
    // Function to redirect to a new page
    function redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }
    

});
