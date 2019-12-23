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

        // create new element label $
        
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

            // makes sure to not use negative numbers
            if (inputIncome >= 0 && inputBills >= 0 && inputClothes >= 0 && inputFood >= 0 && inputEntertainment >= 0) {
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

            console.log(newResult);
            console.log(newPBills);
            console.log(newPClothes);
            console.log(newPFood);
            console.log(newPEntertainment);

            // output for that total boxes
            if (newResult) {
                document.getElementById("totalBoxOutput").style.color = "black";
                const currentIncomeNumber = parseFloat(document.querySelector('#totalBoxOutput').innerText || 0);
                totalBoxOutput.innerText = (result + currentIncomeNumber).toFixed(2);
                
            }

            if (newPBills) {
                document.getElementById("billsBoxOutput").style.color = "black";
                const currentBillsNumber = parseFloat(document.querySelector('#billsBoxOutput').innerText || 0);
                 billsBoxOutput.innerText =  (parseFloat(inputBills) + parseFloat(currentBillsNumber)).toFixed(2);
       
            }

            if (newPFood) {
                document.getElementById("foodBoxOutput").style.color = "black";
                const currentFoodNumber = parseFloat(document.querySelector('#foodBoxOutput').innerText || 0);
                foodBoxOutput.innerText = (parseFloat(inputFood) + parseFloat(currentFoodNumber)).toFixed(2);
       
            }

            if (newPClothes) {
                document.getElementById("clothesBoxOutput").style.color = "black";
                const currentClothesNumber = parseFloat(document.querySelector('#clothesBoxOutput').innerText || 0);
                clothesBoxOutput.innerText = (parseFloat(inputClothes) + parseFloat(currentClothesNumber)).toFixed(2);
            
            }

            if (newPEntertainment) {
                document.getElementById("entertainmentBoxOutput").style.color = "black";
                const currentEntertainmentNumber = parseFloat(document.querySelector('#entertainmentBoxOutput').innerText || 0);
                entertainmentBoxOutput.innerText = (parseFloat(inputEntertainment) + parseFloat(currentEntertainmentNumber)).toFixed(2);
 
            }

            console.log(newResult);
            console.log(newPBills);
            console.log(newPClothes);
            console.log(newPFood);
            console.log(newPEntertainment);
        
            // text area results

            const twentyPercent = .20;
            let saving =  inputIncome * twentyPercent; //20% of your income you should save

            if (result < saving)  {
                let overviewConvert = ((totalBoxOutput.innerText / inputIncome) * 100).toFixed(1);
                totalArea.innerText =`What do you think you are, Maeda money? You can NOT spend more! You are saving ${overviewConvert}% but you should be saving 20% of your income.`; //bad outcome
                document.getElementById("totalPTag").style.color = "red";
                document.getElementById("totalArea").style.color = "red";
            } else if (result >= saving ) {
                let overviewConvert = ((totalBoxOutput.innerText / inputIncome) * 100).toFixed(1);
                totalArea.innerText = `Whoa, you are Maeda Money! Good job, you are saving ${overviewConvert}% of your money.`; //good outcome
                document.getElementById("totalPTag").style.color = "green";
                document.getElementById("totalArea").style.color = "green";
            }

            const fiftyPercent = .50;
            let billsSaving = inputIncome * fiftyPercent; //50% of your income you should spend on bills

            if (billsSaving < inputBills) {
                let billsConvert = ((inputBills / inputIncome) * 100).toFixed(1);
                billsArea.innerText =`You need to STOP being stupid. You are spending ${billsConvert}% of your income on bills.`; //bad outcome
                document.getElementById("billsPTag").style.color = "red";
                document.getElementById("billsArea").style.color = "red";
            } else  {
                let billsConvert = ((inputBills / inputIncome) * 100).toFixed(1);
                billsArea.innerText =`You are on track! You are spending ${billsConvert}% on bills, treat yo-self`; // good outcome
                document.getElementById("billsPTag").style.color = "green";
                document.getElementById("billsArea").style.color = "green";
            }

            const fivePercent = .5;
            let clothesSaving = inputIncome * fivePercent; //5% of your income you should spend on income

            if (clothesSaving <= inputClothes) {
                let clothesConvert = ((inputClothes / inputIncome) * 100).toFixed(1);
                clothesArea.innerText =`You are NOT a fashion Icon, stop it. You are spending ${clothesConvert}% of your total income on clothes.`; //bad outcome
                document.getElementById("clothesPTag").style.color = "red";
                document.getElementById("clothesArea").style.color = "red";
            } else {
                let clothesConvert = ((inputClothes / inputIncome) * 100).toFixed(1);
                clothesArea.innerText =`Nice, you are only spending ${clothesConvert}% of your income on clothes. You could possibly spend more on nicer clothes.`; //good outcome
                document.getElementById("clothesPTag").style.color = "green";
                document.getElementById("clothesArea").style.color = "green";
            }
            
            const elevenPercent = .11;
            let foodSaving = inputIncome * elevenPercent; //11% of your income you should spend on income

            if (foodSaving < inputFood ) {
                let foodConvert = ((inputFood / inputIncome) * 100).toFixed(1);
                foodArea.innerText =`You should cook at home more. You are spending ${foodConvert}% of your income on food.`; //bad outcome
                document.getElementById("foodPTag").style.color = "red";
                document.getElementById("foodArea").style.color = "red";
                
            } else {
                let foodConvert = ((inputFood / inputIncome) * 100).toFixed(1);
                foodArea.innerText =`Awesome, you are just spending ${foodConvert}% of your income on food. You can afford to eat out more.`; // good outcome
                document.getElementById("foodPTag").style.color = "green";
                document.getElementById("foodArea").style.color = "green";
            }

            const tenPercent = .10;
            let entertainmentSaving = inputIncome * tenPercent; //11% of your income you should spend on income

            if (entertainmentSaving < inputEntertainment ) {
                let entertainmentConvert = ((inputEntertainment / inputIncome) * 100).toFixed(1);
                entertainmentArea.innerText =`You should be more anti-social. Dang, you are spending ${entertainmentConvert}% of your income on entertainment.`; //bad outcome
                document.getElementById("entertainmentPTag").style.color = "red";
                document.getElementById("entertainmentArea").style.color = "red";

            } else {
                let entertainmentConvert = ((inputEntertainment / inputIncome) * 100).toFixed(1);
                entertainmentArea.innerText =`You should be less anti-social. Keep it up, you are only spending ${entertainmentConvert}% of your income on entertainment`; // good outcome
                document.getElementById("entertainmentPTag").style.color = "green";
                document.getElementById("entertainmentArea").style.color = "green";
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
            if (totalBoxOutput.innerText <= 0) {
                document.getElementById("topTotal").style.backgroundColor = "red";
            }
            if ( totalBoxOutput.innerText >= 1) {
                document.getElementById("topTotal").style.backgroundColor = "green";
            }
         
            document.getElementById("income").value = '';
            document.getElementById("bills").value = '';
            document.getElementById("clothes").value = '';
            document.getElementById("food").value = '';
            document.getElementById("entertainment").value = '';
            
                if (totalBoxOutput.innerText <= 0 ) {
                window.open("https://giphy.com/embed/yIxNOXEMpqkqA");
                }
            
                // media queries that works under a max width of the page
                var scroll = window.matchMedia("(max-width: 400px)");

                if (scroll.matches) {
                    document.body.scrollTop = document.getElementsByClassName("header");
                    document.documentElement.scrollTop = 750;
                 }

          

            // remove event listener just in case i guess (not needed)
            document.removeEventListener('click', budget); 

                } else {
                    alert("Please use do not use negative numbers, click close to try again.")
                    document.getElementById("income").value = '';
                    document.getElementById("bills").value = '';
                    document.getElementById("clothes").value = '';
                    document.getElementById("food").value = '';
                    document.getElementById("entertainment").value = '';
                }
          }

        //   button that moves your to the budgeting app (down the page)
          function startBtn() {
            var scroll = window.matchMedia("(min-width: 400px)");
    
            document.getElementById("sky").id = "skyNone";
          
            

            

            // if (scroll.matches) {
            //     document.body.scrollTop = 850;
            //     document.documentElement.scrollTop = 850;
            //  }
          }

        //   all javascript below was taken from code pen, this is not our code -matthew
          var particleCount = 300;
          var particleMax   = 1000;
          var sky           = document.querySelector('#sky');
          var canvas        = document.createElement('canvas');
          var ctx           = canvas.getContext('2d');
          var width         = sky.clientWidth;
          var height        = sky.clientHeight;
          var i             = 0;
          var active        = false;
          var snowflakes    = [];
          var snowflake;
          
          canvas.style.position = 'absolute';
          canvas.style.left = canvas.style.top = '0';
          
          var Snowflake = function () {
            this.x = 0;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
            this.r = 0;
          
            this.reset();
          };
          
          Snowflake.prototype.reset = function() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.vy = 1 + Math.random() * 3;
            this.vx = 0.5 - Math.random();
            this.r = 1 + Math.random() * 2;
            this.o = 0.5 + Math.random() * 0.5;
          };
          
          function generateSnowFlakes() {
            snowflakes = [];
            for (i = 0; i < particleMax; i++) {
              snowflake = new Snowflake();
              snowflake.reset();
              snowflakes.push(snowflake);
            }
          }
          
          generateSnowFlakes();
          
          function update() {
            ctx.clearRect(0, 0, width, height);
          
            if (!active) {      
              return;
            }
          
            for (i = 0; i < particleCount; i++) {
              snowflake = snowflakes[i];
              snowflake.y += snowflake.vy;
              snowflake.x += snowflake.vx;
          
              ctx.globalAlpha = snowflake.o;
              ctx.beginPath();
              ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
              ctx.closePath();
              ctx.fill();
          
              if (snowflake.y > height) {
                snowflake.reset();
              }
            }
          
            requestAnimFrame(update);
          }
          
          function onResize() {
            width = sky.clientWidth;
            height = sky.clientHeight;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = '#FFF';
          
            var wasActive = active;
            active = width > 600;
          
            if (!wasActive && active) {
              requestAnimFrame(update);
            }
          }
          
          // shim layer with setTimeout fallback
          window.requestAnimFrame = (function() {
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                      window.setTimeout(callback, 1000 / 60);
                    };
          })();
          
          onResize();
          window.addEventListener('resize', onResize, false);
          
          sky.appendChild(canvas);
          
          var gui = new dat.GUI();
          gui.add(window, 'particleCount').min(1).max(particleMax).step(1).name('Particles count').onFinishChange(function() {
            requestAnimFrame(update);
          });

    





