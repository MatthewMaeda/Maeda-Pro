


//This is "my way" of handling stuff like this too. Not to confuse you though. // You only have to say "let" once, then you can defined as many variables afterward as you want.
let incomeNumber,
billsNumber,
foodNumber,
clothesNumber,
entertainmentNumber,
result = incomeNumber - billsNumber - foodNumber - clothesNumber - entertainmentNumber;

const inputs = document.querySelectorAll("input"); //Get all of the inputs, returns an array of the elements.

inputs.forEach(input => input.addEventListener("change", (e)=> { //Map through and put the event listener on the elements.

//events return a target.value and other things (like ID).

//You can match the ID and assign the target.value  to it with a ternary.

// If the ID of the element matches, then assign the value to the corresponding variable.
e.target.id === "income" ? incomeNumber = Number(e.target.value) : null;
e.target.id === "bills" ? billsNumber = Number(e.target.value) : null;
e.target.id === "food" ? foodNumber = Number(e.target.value) : null;
e.target.id === "clothes" ? clothesNumber = Number(e.target.value) : null;
e.target.id === "entertainment" ? entertainmentNumber = Number(e.target.value) : null;

//Sweet table trick just to show what this will do.
console.table({
    incomeNumber,
    billsNumber,
    foodNumber,
    clothesNumber,
    entertainmentNumber
})
}))

// calculations for budget
    function budget() {
        //sets a variable to find the input value
        let inputIncome = document.getElementById("income").value;
        let inputBills = document.getElementById("bills").value;
        let inputFood = document.getElementById("food").value;
        let inputClothes = document.getElementById("clothes").value;
        let inputEntertainment = document.getElementById("entertainment").value;
        // total for all the inputs
        let result = inputIncome - inputBills - inputFood - inputClothes - inputEntertainment;

        //Creates a new li for feed 
        const newLiIncome = document.createElement("li");
        const newLiBills = document.createElement("li");
        const newLiFood = document.createElement("li");
        const newLiClothes = document.createElement("li");
        const newLiEntertainment = document.createElement("li");
        
        // Creates a new p for Total box
        const newResult = document.createElement("p");
        const newPBills = document.createElement("p");
        const newPFood = document.createElement("p");
        const newPClothes = document.createElement("p");
        const newPEntertainment = document.createElement("p");
        
        //Pairs the created LI to the global variable 
        newLiIncome.innerHTML = inputIncome;
        newLiBills.innerHTML = inputBills;
        newLiFood.innerHTML = inputFood;
        newLiClothes.innerHTML = inputClothes;
        newLiEntertainment.innerHTML = inputEntertainment;

        // Pairs the created p to the global variable 
        newResult.innerHTML = result;
        newPBills.innerHTML = inputBills
        newPFood.innerHTML = inputFood
        newPClothes.innerHTML = inputClothes
        newPEntertainment.innerHTML = inputEntertainment

        // This returns the input in the topBoxes as a += 
        // Get selector of bills 
        // const bills = document.querySelector('#billsBoxOutput');
        // Get inner text and convert it to a number
        // const currValue = Number.parseFloat( bills.innerText);
        // bills.innerText = currValue + inputBills; 
        
      
            //when you double click a new li, it will remove it in the Feed
            newLiIncome.addEventListener('dblclick', e => {
                newLiIncome.remove();
            }); 
            newLiBills.addEventListener('dblclick', e => {
                newLiBills.remove();
            }); 
            newLiClothes.addEventListener('dblclick', e => {
                newLiClothes.remove();
            }); 
            newLiFood.addEventListener('dblclick', e => {
                newLiFood.remove();
            }); 
            newLiEntertainment.addEventListener('dblclick', e => {
                newLiEntertainment.remove();
            }); 


            // Feed Output for all the inputs
            if (inputIncome > 0) {
                feedOutput.append("Income: ", newLiIncome);
            }        
            if (inputBills > 0) {
                feedOutput.append("Bills: ",newLiBills);
            }  
            if (inputClothes > 0) {
                feedOutput.append("Clothes", newLiClothes);
            }  
            if (inputFood > 0) {
                feedOutput.append("Food: ", newLiFood);
            }  
            if (inputEntertainment > 0) {
                feedOutput.append("Entertainment: ", newLiEntertainment);
            }  

            // output for that total
            if (result) {
                totalBoxOutput.append(newResult);
            }
            if (inputBills > 0) {
                billsBoxOutput.append(newPBills);
            }  
            if (inputClothes > 0) {
                clothesBoxOutput.append(newPClothes);
            }  
            if (inputFood > 0) {
                foodBoxOutput.append(newPFood);
            }  
            if (inputEntertainment > 0) {
                entertainmentBoxOutput.append(newPEntertainment);
            }  

            // progress bar
            let billsConvert = (inputIncome / inputBills) * 100;
    
            let billsPercent = document.getElementById("overview-percent").style.width = billsConvert;
            
            if (billsPercent > 0 ) {
                bills.percent.append(billsPercent);
            }
           

            // var elem = document.getElementById("overview-percent");
            // val = parseInt(document.getElementById("inputIncome").value) = 70;
            // var width = 0;
            // var id = setInterval(frame, val);

            // function frame() {
            //     if (width >= val) {
            //         clearInterval(id);
            //     } else {
            //         width++; 
            //         elem.style.width = width + '%'; 
            //         elem.innerHTML = width * 1  + '%';
            //     }
            // }  
          

    

          }





