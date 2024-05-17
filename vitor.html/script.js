document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Simulated user authentication (replace with your actual authentication logic)
    if (username === "user" && password === "password") {
        document.getElementById("loginMessage").textContent = "Login successful!";
        // Redirect to another page or perform any other actions upon successful login
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password!";
    }
});