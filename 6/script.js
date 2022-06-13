function eventKeyup() {
    const firstname = document.querySelector("#firstname");
    const span = document.querySelector("#display-firstname");
    span.innerHTML = firstname.value;
}
document.addEventListener("keyup", eventKeyup);


function oldEnough() {
    const age = document.querySelector("#age");
    const hardTruth = document.querySelector("#a-hard-truth");
    if (age.value > 18) {
        hardTruth.style.visibility = "visible";
    }
}

document.addEventListener('keyup', oldEnough);


function checkPassword() {
    const password = document.querySelector("#pwd");
    const passwordConfirmation = document.querySelector("#pwd-confirm");
    if (password.value.length < 6) {
        password.style.borderColor = "red"
    } else {
        password.style.borderColor = "green"
    }
    if (password.value != passwordConfirmation.value) {
        passwordConfirmation.style.borderColor = "red"
    } else {
        passwordConfirmation.style.borderColor = "green"
    }
}

document.addEventListener('keyup', checkPassword);


function selectField() {
    const selector = document.querySelector("#toggle-darkmode");
    if (selector.value === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

document.addEventListener("change", selectField);