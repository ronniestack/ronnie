// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.setAttribute(
        "aria-expanded",
        menu.classList.contains("active")
    );
});

// Contact form validation
const form = document.getElementById("contactForm");
const msg = document.querySelector(".form-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = ["name", "email", "message"].map(id =>
        document.getElementById(id).value.trim()
    );

    if (fields.includes("")) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Message sent successfully.";
    msg.style.color = "green";
    form.reset();
});
