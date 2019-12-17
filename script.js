


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


// Global Variables 


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
        let newResult = document.createElement("p");
        const newPBills = document.createElement("p");
        const newPFood = document.createElement("p");
        const newPClothes = document.createElement("p");
        const newPEntertainment = document.createElement("p");
        
        //Pairs the created LI to the global variable 
        newLiIncome.innerHTML = inputIncome || 0;
        newLiBills.innerHTML = inputBills || 0;
        newLiFood.innerHTML = inputFood || 0;
        newLiClothes.innerHTML = inputClothes || 0;
        newLiEntertainment.innerHTML = inputEntertainment || 0;

        // Pairs the created p to a variable
        newResult.innerHTML = result;
        newPBills.innerHTML = inputBills;
        newPFood.innerHTML = inputFood;
        newPClothes.innerHTML = inputClothes;
        newPEntertainment.innerHTML = inputEntertainment;

        // This returns the input in the topBoxes as a += 
        // Get selector of bills 
        // const bills = document.querySelector('#billsBoxOutput');
        // Get inner text and convert it to a number
        // const currValue = Number.parseFloat( bills.innerText);
        // bills.innerText = currValue + inputBills; 
        
      
            //when you double click a new li, it will remove it in the Feed
            newLiIncome.addEventListener('dblclick', e => {
                newLiIncome.remove("Income: ");
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
            
                feedOutput.append("Income: ", newLiIncome);
                    
            if (inputBills) {
                feedOutput.append("Bills: ",newLiBills);
            }  
            if (inputClothes) {
                feedOutput.append("Clothes", newLiClothes);
            }  
            if (inputFood) {
                feedOutput.append("Food: ", newLiFood);
            }  
            if (inputEntertainment) {
                feedOutput.append("Entertainment: ", newLiEntertainment);
            }  

            // output for that total
            if (newResult) {
             totalBoxOutput.append(newResult);
            }
            
            // NOT WORKING
            // let curResult = result;
            // newResult.innerText = oldResult + curResult;

            // totalBoxOutput.append(newResult);

            if (newResult) {
                totalBoxOutput.append(newResult);
               }
            if (newPBills) {
            billsBoxOutput.append(newPBills);
            }
            // let oldBills= Number(newPBills.innerText);
            // let curBills  = inputBills;
            // newPBills.innerText = oldBills + curBills;
            if (newPClothes) {
                clothesBoxOutput.append(newPClothes);
            }
            if (newPFood) {
                foodBoxOutput.append(newPFood);
            }
            if (newPEntertainment) { 
            entertainmentBoxOutput.append(newPEntertainment);
            }

            // text area results
            const twentyPercent = .20;
            let saving =  inputIncome * twentyPercent;

            if (result < saving) {
                totalArea.append("What do you think you are, Maeda money? Start saving more!");
            } else if (result >= saving ) {
                totalArea.append("Whoa, you are Maeda Money! You are doing a good job budgeting your money.");
            }

            if (inputIncome < inputBills) {
                billsArea.append("You need to STOP being stupid"); //bad outcome
            } else  {
                billsArea.append("You are on track, to saving money, treat yo-self"); // good outcome
            }

            if (inputBills < inputClothes) {
                clothesArea.append("You are NOT a fashion Icon, stop it."); //bad outcome
            } else {
                clothesArea.append("You could possibly spend more on nicer clothes."); //good outcome
            }
            
            if (inputFood < inputEntertainment ) {
                foodArea.append("You should cook at home more."); //bad outcome
            } else {
                foodArea.append("You can afford to eat out more."); // good outcome
            }

            if (inputEntertainment > inputClothes ) {
            entertainmentArea.append("You should be more anti-social."); //bad outcome
            } else {
            entertainmentArea.append("You should be less anti-social."); // good outcome
            }
            // end of text area results


            // progress bar
            
            let overviewConvert = ((result / inputIncome) * 100).toFixed(2);
            document.getElementById("overview-percent").style.width = `${overviewConvert}%`;
            document.getElementById("overview-p").append(`${overviewConvert}%`);

            let billsConvert = ((inputBills / inputIncome) * 100).toFixed(2);
            document.getElementById("bills-percent").style.width = `${billsConvert}%`;
            document.getElementById("bills-p").append(`${billsConvert}%`);

            let clothesConvert = ((inputClothes / inputIncome) * 100).toFixed(2);
            document.getElementById("clothes-percent").style.width = `${clothesConvert}%`;
            document.getElementById("clothes-p").append(`${clothesConvert}%`);

            let foodConvert = ((inputFood / inputIncome) * 100).toFixed(2);
            document.getElementById("food-percent").style.width = `${foodConvert}%`;
            document.getElementById("food-p").append(`${foodConvert}%`);

            let entertainmentConvert = ((inputEntertainment / inputIncome) * 100).toFixed(2);
            document.getElementById("entertainment-percent").style.width = `${entertainmentConvert}%`;
            document.getElementById("entertainment-p").append(`${entertainmentConvert}%`);
    

          

    

          }





