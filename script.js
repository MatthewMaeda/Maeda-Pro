document.getElementById("calcBtn").addEventListener('click', budget);

// calculations for budget
    function budget() {
        //sets a variable to find the input value
        let inputIncome = document.getElementById("income").value || 0;
        let inputBills = document.getElementById("bills").value || 0;
        let inputFood = document.getElementById("food").value || 0;
        let inputClothes = document.getElementById("clothes").value || 0;
        let inputEntertainment = document.getElementById("entertainment").value || 0;
        // total for all the inputs

        let result = parseFloat(inputIncome) - (parseFloat(inputBills) + parseFloat(inputFood) + parseFloat(inputClothes) + parseFloat(inputEntertainment));
        console.log(result);
        console.log(inputBills);
        console.log(inputClothes);
        console.log(inputEntertainment);
        console.log(inputFood);
        console.log(inputIncome);
        console.log(parseFloat(inputIncome));
        console.log(parseFloat(inputBills));
        console.log(parseFloat(inputClothes));
        console.log(parseFloat(inputEntertainment));
        console.log(parseFloat(inputFood));
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
        newLiIncome.innerHTML = inputIncome;
        newLiBills.innerHTML = inputBills;
        newLiFood.innerHTML = inputFood;
        newLiClothes.innerHTML = inputClothes;
        newLiEntertainment.innerHTML = inputEntertainment;

        // Pairs the created p to a variable
        newResult.innerHTML = result;
        newPBills.innerHTML = inputBills;
        newPFood.innerHTML = inputFood;
        newPClothes.innerHTML = inputClothes;
        newPEntertainment.innerHTML = inputEntertainment;
      
            //when you double click a new li, it will remove it in the Feed (might need to remove this)
            feedOutput.addEventListener('dblclick', e => {
                feedOutput.remove();
            }); 

            // Feed Output for all the inputs
            if (inputIncome) {
                feedOutput.append("Income: ", newLiIncome);
            }
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

            // output for that total boxes
            if (newResult) {
                const currentIncomeNumber = parseFloat(document.querySelector('#totalBoxOutput').innerText || 0);
             totalBoxOutput.innerText = result + currentIncomeNumber;
            }
            if (newPBills) {
                const currentBillsNumber = parseFloat(document.querySelector('#billsBoxOutput').innerText || 0);
                billsBoxOutput.innerText =  (parseFloat(inputBills) + parseFloat(currentBillsNumber));
            }
            if (newPFood) {
                const currentFoodNumber = parseFloat(document.querySelector('#foodBoxOutput').innerText || 0);
                foodBoxOutput.innerText = (parseFloat(inputFood) + parseFloat(currentFoodNumber));
            }
            if (newPClothes) {
                const currentClothesNumber = parseFloat(document.querySelector('#clothesBoxOutput').innerText || 0);
                clothesBoxOutput.innerText = (parseFloat(inputClothes) + parseFloat(currentClothesNumber));
            }
            if (newPEntertainment) {
                const currentEntertainmentNumber = parseFloat(document.querySelector('#entertainmentBoxOutput').innerText || 0);
                entertainmentBoxOutput.innerText = (parseFloat(inputEntertainment) + parseFloat(currentEntertainmentNumber));
            }

        
            // text area results

            const twentyPercent = .20;
            let saving =  inputIncome * twentyPercent; //20% of your income you should save

            if (result < saving)  {
                totalArea.innerText ="What do you think you are, Maeda money? You can NOT spend more! You Should be saving 20% of your income."; //bad outcome
                document.getElementById("totalPTag").style.color = "red";
            } else if (result >= saving ) {
                totalArea.innerText = "Whoa, you are Maeda Money! You are doing a good job budgeting your money."; //good outcome
                document.getElementById("totalPTag").style.color = "green";
            }

            const fiftyPercent = .50;
            let billsSaving = inputIncome * fiftyPercent; //50% of your income you should spend on bills

            if (billsSaving < inputBills) {
                billsArea.innerText ="You need to STOP being stupid. You should only be paying 50% of your income on bills."; //bad outcome
                document.getElementById("billsPTag").style.color = "red";
            } else  {
                billsArea.innerText ="You are on track, to saving money, treat yo-self"; // good outcome
                document.getElementById("billsPTag").style.color = "green";
            }

            const fivePercent = .5;
            let clothesSaving = inputIncome * fivePercent; //5% of your income you should spend on income

            if (clothesSaving < inputClothes) {
                clothesArea.innerText ="You are NOT a fashion Icon, stop it. Whoa, you should only be spending 5% of your total income on clothes."; //bad outcome
                document.getElementById("clothesPTag").style.color = "red";
            } else {
                clothesArea.innerText ="You could possibly spend more on nicer clothes."; //good outcome
                document.getElementById("clothesPTag").style.color = "green";
            }
            
            const elevenPercent = .11;
            let foodSaving = inputIncome * elevenPercent; //11% of your income you should spend on income

            if (foodSaving < inputFood ) {
                foodArea.innerText ="You should cook at home more. You should only be spending 11% of your income on food."; //bad outcome
                document.getElementById("foodPTag").style.color = "red";
            } else {
                foodArea.innerText ="You can afford to eat out more."; // good outcome
                document.getElementById("foodPTag").style.color = "green";
            }

            const tenPercent = .10;
            let entertainmentSaving = inputIncome * tenPercent; //11% of your income you should spend on income

            if (entertainmentSaving < inputEntertainment ) {
            entertainmentArea.innerText ="You should be more anti-social. Dang, you should only be spending 10% of your income on entertainment."; //bad outcome
            document.getElementById("entertainmentPTag").style.color = "red";
            } else {
            entertainmentArea.innerText ="You should be less anti-social."; // good outcome
            document.getElementById("entertainmentPTag").style.color = "green";
            }
            // end of text area results
            
            // progress bar
            if (result > 0) { 
                    let overviewConvert = ((result / inputIncome) * 100).toFixed(1);
                    document.getElementById("overview-percent").style.width = `${overviewConvert}%`;
                    document.getElementById("overview-p").innerHTML = `${overviewConvert}%`;
                
                    let billsConvert = ((inputBills / inputIncome) * 100).toFixed(1);
                    document.getElementById("bills-percent").style.width = `${billsConvert}%`;
                    document.getElementById("bills-p").innerHTML = `${billsConvert}%`;
                
                    let clothesConvert = ((inputClothes / inputIncome) * 100).toFixed(1);
                    document.getElementById("clothes-percent").style.width = `${clothesConvert}%`;
                    document.getElementById("clothes-p").innerHTML =`${clothesConvert}%`;
                
                    let foodConvert = ((inputFood / inputIncome) * 100).toFixed(1);
                    document.getElementById("food-percent").style.width = `${foodConvert}%`;
                    document.getElementById("food-p").innerHTML = `${foodConvert}%`;
                
                    let entertainmentConvert = ((inputEntertainment / inputIncome) * 100).toFixed(1);
                    document.getElementById("entertainment-percent").style.width = `${entertainmentConvert}%`;
                    document.getElementById("entertainment-p").innerHTML = `${entertainmentConvert}%`; 
            } 

            //Below this point inputs will be numbers not strings 
            inputIncome = Number.parseFloat(inputIncome);
            inputBills = Number.parseFloat(inputBills);
            inputClothes = Number.parseFloat(inputClothes);
            inputEntertainment = Number.parseFloat(inputEntertainment);
            inputIncome = Number.parseFloat(inputIncome);
            inputFood = Number.parseFloat(inputFood);
            
            // turns the background red if the result is less then zero
            if (result <= 0) {
                document.getElementById("topTotal").style.backgroundColor = "red";
            } else {
                document.getElementById("topTotal").style.backgroundColor = "green";
            }
         
            document.getElementById("income").value = '';
            document.getElementById("bills").value = '';
            document.getElementById("clothes").value = '';
            document.getElementById("food").value = '';
            document.getElementById("entertainment").value = '';
            
                if (result < 0 ) {
                window.open("https://giphy.com/embed/yIxNOXEMpqkqA");
                }
            
            // remove event listener just in case i guess (not needed)
            document.removeEventListener('click', budget); 
          }



    





