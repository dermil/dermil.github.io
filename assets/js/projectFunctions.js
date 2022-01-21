/* Project functions */

		//Pig latin translator
		function translatePigLatin() {
			let vowel = /^[aeiou]/g;
			let str = document.getElementById('pigEng').value.toLowerCase().split(" ");
			let newStr = [];
			for (let i = 0; i < str.length; i++){
				if (vowel.test(str[i])){
					newStr.push(str[i].replace(/(^[a-z]+||[aeiou]+)/,"$1way")) //Replace vowels
				} else {
					newStr.push(str[i].replace(/(^[^aeiou]+)([a-z]+||[aeiou]+)/,"$2$1ay")) //Replace consonants
					
				}  
			}
			let fStr = newStr.join(" ");
			
			capitalizeFirstLetter = (str) => {
				return str.charAt(0).toUpperCase() + str.slice(1);
			}


			return document.getElementById("pigLat").value = capitalizeFirstLetter(fStr);
		}

		//Cash register
		var register = [];
		//Create the cash register with random variables
		let randomizeCashRegister = () =>{
			let cid = [];
			function getRndInteger(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			  }
	
			const currency = {
			  "PENNY": .01,
			  "NICKEL": .05,
			  "DIME": .1,
			  "QUARTER": .25,
			  "ONE": 1,
			  "FIVE": 5,
			  "TEN": 10,
			  "TWENTY": 20,
			  "ONE HUNDRED": 100
			};
			
			
			for (let y in currency){
				let cur = [];
				switch (y){
					case "PENNY":
						 cur = [y,(getRndInteger(0,199)*currency[y])]
						break;
	
					case "NICKEL":
						 cur = [y,(getRndInteger(50,199)*currency[y])]
						break;
	
					case "DIME":
						 cur = [y,(getRndInteger(50,199)*currency[y])]
						break;
	
					case "QUARTER":
						 cur = [y,(getRndInteger(20,120)*currency[y])]
						break;
	
					case "ONE":
						 cur = [y,(getRndInteger(0,60)*currency[y])]
						break;
					
					case "FIVE":
						 cur = [y,(getRndInteger(0,50)*currency[y])]
						break;
						
					case "TEN":
						 cur = [y,(getRndInteger(0,30)*currency[y])]
						break;
	
					case "TWENTY":
						 cur = [y,(getRndInteger(0,12)*currency[y])]
						break;
	
					case "ONE HUNDRED":
						 cur = [y,(getRndInteger(0,15)*currency[y])]
						break;
	
				}
				cid.push(cur);
			}
			return register = cid;
		}
		//Load the cash register initially
		$(window).on('load', randomizeCashRegister());
		
		function checkCashRegister(price, cash, cid) {
			
			let change = cash - price;
			let valid = []; //Currency thats equal to or below the change needed
			let money = cid.slice();
			let out = {};
			
			const currency = {
			  "PENNY": .01,
			  "NICKEL": .05,
			  "DIME": .1,
			  "QUARTER": .25,
			  "ONE": 1,
			  "FIVE": 5,
			  "TEN": 10,
			  "TWENTY": 20,
			  "ONE HUNDRED": 100
			};
			
			for (let x in currency){ //Finds the bills that can be used to give change
			  if (currency[x] <= change){
				valid.push(x)
			  }
			}
			//Gets the total value of all the valid currency that can be used for change
			let inhand = cid.filter(val => valid.indexOf(val[0]) != -1)
						  .reduce((prev,next) => prev+next[1],0);
						  
		  let open = () => {
			let handOut = [];
			//This is in the case of HAVING enough change
			//Trying to find the currency in the cash register
			for (let y = valid.length-1; y >= 0; y--){//Loops to find money I know I might need
			  for (let z = money.length-1; z >= 0; z--){//Checking cash register
				if (money[z][0] == valid[y]){//Find how many bills are in the register
				  let value = (currency[valid[y]]); //The value of the current bill
				  let totalBills = money[z][1] / value; //Bills available to be given out
				  let take = 0; //Value of the amount of bills you need
				  if (change >= value){
					for (take = 0; (change >= value)&&(take < totalBills); take++){
					  change -= value;
					  if ((change < .01) && (change != 0)){
						change = .01;
					  }
					}
				  let arr = [valid[y],(take*value)];
				  handOut.push(arr);
				  }
				}
			  }
			}
			return handOut;
		  }
			
		   
			  if (inhand > change){
				out = {status: "OPEN",change: open()};
			  } else if ((inhand == change)||(((change - inhand) < 0.01) && ((change - inhand) > 0))){
				out = {status: "CLOSED",change: cid};
			  } else if (inhand < change){ //whats in cash is less than change
				out = {status: "INSUFFICIENT_FUNDS",change: []};
			  }
			return out;
		  }
		