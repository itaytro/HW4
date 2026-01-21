
document.addEventListener("DOMContentLoaded", function () {

    const psyOption = document.getElementById("psyOption");
    const mechinaOption = document.getElementById("mechinaOption");
    const button = document.getElementById("button");
    const behind30 = document.getElementById("behind30");
    const age = document.getElementById("age");


    const psyGrade = document.getElementById("psyGrade");
    const mechinaGrade = document.getElementById("mechinaGrade");
    const bagrutGrade = document.getElementById("bagrutGrade");

    function updateSelect() {
        if (psyOption.checked) {
            psyGrade.disabled = false;
            mechinaGrade.disabled = true;
            mechinaGrade.value = "";
        }

        if (mechinaOption.checked) {
            mechinaGrade.disabled = false;
            psyGrade.disabled = true;
            psyGrade.value = "";
        }
    }
    function validate(e) {
        e.preventDefault();
        if (bagrutGrade.value === "" || isNaN(bagrutGrade.value)) {
            alert("You should enter a bagrut grade");
        }
        if(age.value>30){
            behind30.innerHTML = "You are eligible for admission to any faculty you choose";
        }}
        
    psyOption.addEventListener("change", updateSelect);
    mechinaOption.addEventListener("change", updateSelect);
    button.addEventListener("click", validate);

    updateSelect();
});
