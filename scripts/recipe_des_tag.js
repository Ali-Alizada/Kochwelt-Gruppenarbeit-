function calculate() {
    let contentRef = document.getElementById("content");
    let inputV = document.getElementById("input").value;
    contentRef.innerHTML = "";
    const amount = [200, 0.5, 1, 0.5, 0.25, 0.5, 125, 120, 50,];

    if (inputV > 20 || inputV <= 0) {
        alert("Bitte geben Sie eine gültige Anzahl Portionen zwischen 1 und 20 ein!");
        inputV = 4;
        location.reload();
    }

    for (let index = 0; index < amount.length; index++) {
        const element = amount[index];
        let person = element * inputV;
        amount[index] = person;
    }
    contentRef.innerHTML = getRecipeTemplate(amount);
    return amount;
}

function getRecipeTemplate(amount) {
    return `<ul>
    <li class="bg_gray" >${amount[0]} g Rinderhackfleisch</li>
    <li class="bg_white">${amount[1]} Zwiebel</li>
    <li class="bg_gray">${amount[2]} Zehe/n Knoblauch</li>
    <li class="bg_white">${amount[3]} EL Öl zum Braten</li>
    <li class="bg_gray"> ${amount[4]} Paprikaschote</li>
    <li class="bg_white">${amount[5]} EL Tomatenmark</li>
    <li class="bg_gray">${amount[6]} g Dose Tomaten, stückige</li>
    <li class="bg_white">${amount[7]} g Dose Kidneybohnen </li>
    <li class="bg_gray">${amount[8]} g Dose Mais</li>
    <li class="bg_white">Paprikapulver</li>
    <li class="bg_gray">Chilipulver</li>
    <li class="bg_white">Salz und Pfeffer</li>
    <li class="bg_gray">Zucker</li>
    <li class="bg_white">Tabasco</li>
    <ul>`
}