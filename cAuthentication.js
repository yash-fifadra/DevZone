// User database
// User database
let users = [
    { username: "admin", password: "yash123", email: "yash@gmail.com" },
    { username: "johndoe", password: "abc123", email: "johndoe@example.com" },
    { username: "janedoe", password: "mypassword", email: "janedoe@example.com" },
    { username: "testuser", password: "test123", email: "testuser@example.com" }
  ];
  
  // Registration function
  function register(username, email, password) {
    // Check if username already exists
    if (users.some(user => user.username === username || user.email === email)) {
      alert("Username or email already exists");
      return;
    }
  
    // Add new user to the database
    users.push({ username, email, password });
    alert("Registration successful");
  }
  
  // Authentication function
  function authenticate(email, password) {
    // Find user in the database
    const user = users.find(user => user.email === email);
  
    // Check if user exists and password is correct
    if (user && user.password === password) {
      alert("Authentication successful");
      showHomePage();
    } else {
      alert("Invalid username or password");
    }
  }
  
  // Home page function
  function showHomePage() {
    // Load the home.html file and display it
    fetch('aRepository.html')
    .then(response => response.text())
    .then(html => {
      // Replace the current page content with the home.html content
      document.documentElement.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading home.html:', error);
    });
  }
  
  // Login form event listener
  document.querySelector('.login').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('.login input[name="email"]').value;
    const password = document.querySelector('.login input[name="pswd"]').value;
    authenticate(username, password);
  });
  
  // Registration form event listener
  document.querySelector('.register').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('.register input[name="txt"]').value;
    const email = document.querySelector('.register input[name="email"]').value;
    const password = document.querySelector('.register input[name="pswd"]').value;
    register(username, email, password);
  });