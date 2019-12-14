// Start of Sidebar 
// feed 
// const budget = document.querySelector('#budget-add');
// budgetAddToPage.addEventListener('calcBtn', e => {
//     e.preventDefult();
//     const income = document.querySelector('#income');
//     if (income.value ) {
//         //<li></li>
//         const budgetHTML = document.createElement('li');
//         //adds <class="feed-list"></li>
//         budgetHTML.classList.add('feed-list');
//         // <li class="feed-item"> Text from the total input in put here </li>
//         budgetHTML.innerText = income.value;
//         // if double clicked on the feed it will be removed from the feed
//         budgetHTML.addEventListener('dblclick', e => {
//             budgetHTML.remove();
//         });
//         const 
//     }
// });


// calculations for budget
    function budget() {
        let incomeNumber = document.getElementById("income").value;
        let billsNumber = document.getElementById("bills").value;
        let foodNumber = document.getElementById("food").value;
        let clothesNumber = document.getElementById("clothes").value;
        let entertainmentNumber = document.getElementById("entertainment").value;
        
        let result = incomeNumber - billsNumber - foodNumber - clothesNumber - entertainmentNumber;
    
        // for feed Creates <li>
        const newLi = document.createElement("li");
        const newLiName = document.createElement("p");
        // for totals Creates <label>
        const newLbl = document.createElement("label");

        const newResult = document.createElement("p");
        newResult.innerHTML = result

        //new li on html
        newLiName.innerHTML = "Income Added: "
        newLi.innerHTML = incomeNumber;
        newLi.innerHTML = billsNumber;
        newLi.innerHTML = foodNumber;
        newLi.innerHTML = clothesNumber;
        newLi.innerHTML = entertainmentNumber;
        
        //new Label on html
        newLbl.innerHTML = incomeNumber;
        newLbl.innerHTML = billsNumber;
        newLbl.innerHTML = foodNumber;
        newLbl.innerHTML = clothesNumber;
        newLbl.innerHTML = entertainmentNumber;

            //when you double click a new li, it will remove it in the Feed
            newLi.addEventListener('dblclick', e => {
                newLi.remove();
            }); 

            //income feed display
            if (document.getElementById("income").value > 0) {
                feedOutput.append(newLi);
            }  
        
            if (document.getElementById("bills").value > 0) {
                feedOutput.append(newLi);
            }  
            if (document.getElementById("food").value > 0) {
                feedOutput.append(newLi);
            }  
            if (document.getElementById("clothes").value > 0) {
                feedOutput.append(newLi);
            }  
            if (document.getElementById("entertainment").value > 0) {
                feedOutput.append(newLi);
            } 
          

            //income Total boxes
            if (document.getElementById("income").value > 0) {
                totalBoxOutput.append(newLbl);
            }
            if (document.getElementById("bills").value > 0) {
                billsBoxOutput.append(newLbl);
            }  
            if (document.getElementById("food").value > 0) {
                foodBoxOutput.append(newLbl);
            }  
            if (document.getElementById("clothes").value > 0) {
                clothesBoxOutput.append(newLbl);
            }  
            if (document.getElementById("entertainment").value > 0) {
                entertainmentBoxOutput.append(newLbl);
            } 
        
    
        // /\D/g (replace every single non-digit)
        // income = income.replace(/\D/g,' ');
        // bills = bills.replace(/\D/g,' ');
        // food = food.replace(/\D/g,'');
        // clothes = clothes.replace(/\D/g,' ');
        // entertainment = entertainment.replace(/\D/g,'' );

        // result = income - bills - food - clothes - entertainment;
        // savings = (income * 0.20); //in practice you should in general put 20% of your income in your savings
        // $(".data-results").empty(); //make a class to show this result
        
        // if ( result === 0 ) {
        //     (".data-results").append('<p class="text-negative"> Please enter your data. </p>');
        // } else if ( result < 0 ) {
        //     (".data-results").append('<p class="text-negative"> We have calculated that you have ' + result + ' left in your budget. Need a tip to save more? tips(1. Lay down, 2. Grab a bible, 3. Start praying)</p>');
        // } else {
        //     (".data-results").append('<p class="text-positive"> We have calculated that you have ' + result + ' left in your budget. </p>','<p class="text-good">So you should save at least ' + savings + '.</p>');
        // }
    }
// End of Sidebar
