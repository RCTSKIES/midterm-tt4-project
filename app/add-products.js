document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Product added (not functional, just UI)");
    });
});
