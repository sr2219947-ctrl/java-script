const btn = document.querySelector("button");
const unit = document.getElementById("unit");

btn.addEventListener("click", () => {
    const weight = Number(document.getElementById("weight").value);
    const heightValue = Number(document.getElementById("height").value);

    let height = 0;

    if (unit.value === "cm") {
        height = heightValue / 100;
    } 
    else if (unit.value === "m") {
        height = heightValue;
    } 
    else if (unit.value === "ft") {
        height = heightValue * 0.3048; // 1 ft = 0.3048 meters
    }

    if (isNaN(weight) || weight <= 0 || height <= 0) {
        alert("Enter valid values");
        return;
    }

    const bmi = weight / (height * height);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").textContent =
        `BMI: ${bmi.toFixed(2)} (${category})`;
});