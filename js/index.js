function toggleDarkMode(){
    var body = document.body;
    body.classList.toggle("dark-mode");

    // Cập nhật text nút
    const btn = document.getElementById("darkModeToggle");
    if(body.classList.contains("dark-mode")){
        btn.textContent = "Tắt chế độ ban đêm";
    } else {
        btn.textContent = "Bật chế độ ban đêm";
    }
}

// Gán sự kiện nút bật/tắt chế độ ban đêm
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        const emailInput = document.getElementById("email");
        if (!emailInput.value) {
            event.preventDefault();
            alert("Vui lòng nhập email");
            emailInput.focus();
        }
    });
});