function calculate() {
    let contentRef = document.getElementById("content");
    let inputV = document.getElementById("input").value;
    contentRef.innerHTML = ""
    const amount = [250, 3, 2, 1, 40, 1,];

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
    <li class="bg_gray" >${amount[0]} g Tagliatelle</li>
    <li class="bg_white">${amount[1]} EL Olivenöl (extra vergine)</li>
    <li class="bg_gray">${amount[2]} Knoblauchzehen (fein gehackt oder in Scheiben)</li>
    <li class="bg_white">${amount[3]} frische rote Chili (in Ringen)</li>
    <li class="bg_gray"> ${amount[4]} g frisch geriebener Parmesan</li>
    <li class="bg_white">${amount[5]} Handvoll frische Petersilienblätter</li>
    <li class="bg_white">1 Prise	Meersalz</li>
    <li class="bg_gray">1 Schuss frischen Pfeffer aus der Mühle</li>
    <ul>`

}