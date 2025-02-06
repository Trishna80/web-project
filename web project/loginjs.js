document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
    document.getElementById('signup-btn').classList.add('active');
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
    document.getElementById('login-btn').classList.add('active');
});

// Handle signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    alert('Signup successful! You can now log in.');
    document.getElementById('signup-form').reset();
});

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
        // Redirect to another page or perform other actions
    } else {
        alert('Invalid email or password. Please try again.');
    }
});