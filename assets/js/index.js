const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

inputs.forEach((input, i) => {
    input.addEventListener("click", () => upLabel(input, i));
});

function upLabel(input, i) {
    labels[i].classList.add("up");
    input.addEventListener("blur", () => checkInput());
}

function checkInput() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            labels[i].classList.remove("up");
        } else {
            labels[i].classList.add("up");
        }
    }
}
