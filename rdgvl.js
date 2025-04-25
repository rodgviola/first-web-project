document.getElementById('contractForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("responseMessage");

    if (name && email && message) {
        responseMessage.textContent = "Thanks for reaching out, " + name + "!";
        responseMessage.style.color = "green";
        this.reset();
    } else {
        responseMessage.textContent = "Please fill out all fields.";
        responseMessage.style.color = "red";
    }
});