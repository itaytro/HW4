function updateFields() {
    const radioPsych = document.getElementById("radioPsych");
    const radioMech = document.getElementById("radioMech");
    const mechinaInput = document.getElementById("mechinaInput");
    const psychInput = document.getElementById("psychInput");

    if (radioPsych.checked) {
        psychInput.disabled = false;
        mechinaInput.disabled = true;
    } 
    else if (radioMech.checked) {
        mechinaInput.disabled = false;
        psychInput.disabled = true;
    }
}

function validate(){
    event.preventDefault();
    const bagrutInput = document.getElementById("bagrutInput");
    const ageInput = document.getElementById("ageInput");
    const element = document.getElementById("t1");

    element.innerHTML = "";
    element.classList.remove("green");
    
    if (bagrutInput.value === "") {
        alert("You should enter a bagrut grade")
    }
    if (Number(ageInput.value) > 30) {
        element.classList.add("green");
        element.innerHTML = "You are eligible for admission to any faculty you choose";
    }
}