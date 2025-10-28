function calculate() {
    let contentRef = document.getElementById("content");
    let inputV = document.getElementById("input").value;
    contentRef.innerHTML = ""
    const amount = [2, 125, 250, 2, 1, 60, 100,];

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
    <li class="bg_gray" >${amount[0]} Stk Schalotten</li>
    <li class="bg_white">${amount[1]} g Champignons</li>
    <li class="bg_gray">${amount[2]} g Kalbsschnitzel</li>
    <li class="bg_white">${amount[3]} EL Bratbutter</li>
    <li class="bg_gray"> ${amount[4]} EL Weizenmehl Typ 550</li>
    <li class="bg_white">${amount[5]} ml Weisswein</li>
    <li class="bg_gray">${amount[6]} ml Vollrahm</li>
    <li class="bg_white">1 Prise	Meersalz</li>
    <li class="bg_gray">1 Schuss frischen Pfeffer aus der Mühle</li>
    <ul>`

}