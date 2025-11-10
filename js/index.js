function checkform() {
    const c = document.getElementById("Email");
    if (!c.value) {
        alert("Vui lòng nhập email!");
        return false;
    }
    return true;
}
