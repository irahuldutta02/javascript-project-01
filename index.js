function validateForm() {
    let userId = document.forms["myForm"]["user-id"].value;
    let userIdLength = userId.length;
    if (userId == "" || userIdLength <5 || userIdLength >12) {
        document.getElementById("user-id-alert").innerHTML = "[ Required and must be of length 5 to 12. ]"
        return false;
    }

    let passwordId = document.forms["myForm"]["password"].value;
    let passwordLength = passwordId.length;
    if (passwordId == "" || passwordLength <7 || passwordLength >12) {
        document.getElementById("password-alert").innerHTML = "[ Required and must be of length 7 to 12. ]"
        return false;
    }
}