// Background color changer
function changeBackgroundColor() {
    const colors = ["#f0f4f8", "#ffe4e1", "#e6ffe6", "#e6f0ff", "#fff3e6"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Contact form validation
function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    alert("Thank you for contacting us!");
    document.getElementById('contactForm').reset();
}
