
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
             totalBoxOutput.innerText =  result;
            }
            if (newPBills) {
                billsBoxOutput.innerText = inputBills;
            }
            if (newPFood) {
                foodBoxOutput.innerText =  inputFood;
            }
            if (newPClothes) {
                clothesBoxOutput.innerText = inputClothes;
            }
            if (newPEntertainment) {
                entertainmentBoxOutput.innerText = inputEntertainment;
            }
            // text area results
            const twentyPercent = .20;
            let saving =  inputIncome * twentyPercent;

            if (result < saving) {
                totalArea.innerText ="What do you think you are, Maeda money? You can NOT spend more!";
                document.getElementById("totalPTag").style.color = "red";
            } else if (result >= saving ) {
                totalArea.innerText = "Whoa, you are Maeda Money! You are doing a good job budgeting your money.";
                document.getElementById("totalPTag").style.color = "green";
            }

            if (inputIncome < inputBills) {
                billsArea.innerText ="You need to STOP being stupid"; //bad outcome
                document.getElementById("billsPTag").style.color = "red";
            } else  {
                billsArea.innerText ="You are on track, to saving money, treat yo-self"; // good outcome
                document.getElementById("billsPTag").style.color = "green";
            }

            if (inputBills < inputClothes) {
                clothesArea.innerText ="You are NOT a fashion Icon, stop it."; //bad outcome
                document.getElementById("clothesPTag").style.color = "red";
            } else {
                clothesArea.innerText ="You could possibly spend more on nicer clothes."; //good outcome
                document.getElementById("clothesPTag").style.color = "green";
            }
            
            if (inputFood < inputEntertainment ) {
                foodArea.innerText ="You should cook at home more."; //bad outcome
                document.getElementById("foodPTag").style.color = "red";
            } else {
                foodArea.innerText ="You can afford to eat out more."; // good outcome
                document.getElementById("foodPTag").style.color = "green";
            }

            if (inputEntertainment > inputClothes ) {
            entertainmentArea.innerText ="You should be more anti-social."; //bad outcome
            document.getElementById("entertainmentPTag").style.color = "red";
            } else {
            entertainmentArea.innerText ="You should be less anti-social."; // good outcome
            document.getElementById("entertainmentPTag").style.color = "green";
            }
            // end of text area results

            // progress bar
            if (inputIncome > 0) {
                let overviewConvert = ((result / inputIncome) * 100).toFixed(1);
                document.getElementById("overview-percent").style.width = `${overviewConvert}%`;
                document.getElementById("overview-p").innerHTML = `${overviewConvert}%`;
            }

            if (inputBills > 0) {
                let billsConvert = ((inputBills / inputIncome) * 100).toFixed(1);
                document.getElementById("bills-percent").style.width = `${billsConvert}%`;
                document.getElementById("bills-p").innerHTML = `${billsConvert}%`;
            }

            if (inputClothes > 0) {
                let clothesConvert = ((inputClothes / inputIncome) * 100).toFixed(1);
                document.getElementById("clothes-percent").style.width = `${clothesConvert}%`;
                document.getElementById("clothes-p").innerHTML =`${clothesConvert}%`;
            }

            if (inputFood > 0) {
                let foodConvert = ((inputFood / inputIncome) * 100).toFixed(1);
                document.getElementById("food-percent").style.width = `${foodConvert}%`;
                document.getElementById("food-p").innerHTML = `${foodConvert}%`;
            }

            if (inputEntertainment > 0) {
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

            if ( inputIncome < inputBills  ) {
                document.getElementById("bills-percent").style.width = "100%";
            }
            if ( inputIncome < inputClothes) {
                document.getElementById("clothes-percent").style.width = "100%";
            }
            if ( inputIncome < inputFood) {
                document.getElementById("food-percent").style.width = "100%";
            }
            if (inputIncome < inputEntertainment) {
                document.getElementById("entertainment-percent").style.width = "100%";
            }
            
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
            
    

          }





