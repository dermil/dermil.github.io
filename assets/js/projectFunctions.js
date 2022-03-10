/* Project functions */

	/* Project Tabs menu */
	function openProject(evt, projectName){
		//Variable ini
		var i, tabContent, tabLink;

		//Find all tabContent elements and hide them
		tabContent = document.getElementsByClassName("tabContent");
		for (i = 0; i < tabContent.length; i++){
			tabContent[i].style.display="none";
		}

		//Get all "tabLink" elements and remove the "active" class
		tabLink = document.getElementsByClassName("tabLink");
		for (i = 0; i < tabLink.length; i++){
			tabLink[i].className = tabLink[i].className.replace(" active","");
		}

		//Show the current tab, and add the "active" class to the button that opened it
		document.getElementById(projectName).style.display = "block";
		evt.currentTarget.className += " active";
		
	}

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
		var register = ["yes"];
		//Create the cash register with random variables
		function randomizeCashRegister() {
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
						 cur = [y,(getRndInteger(2,12)*currency[y])]
						break;
	
					case "ONE HUNDRED":
						 cur = [y,(getRndInteger(0,15)*currency[y])]
						break;
	
				}
				cid.push(cur);
			}
			register = cid;
			return document.getElementById("cashRegister").value = register;
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
		
		  //TINY JUMP GAME
		  var pCharacter = document.getElementById("character");
		  var pEnemy = document.getElementsByClassName("block");

		  function jump(){
			  if (pCharacter.classList != "animate-jump"){
				pCharacter.classList.add("animate-jump");
			  }
			  
			  setTimeout(function(){
				pCharacter.classList.remove("animate-jump")
			  },500)//this 500 refers to the amount of time of the animate-jump class in main.css in ms
		  }

		  var checkDead = setInterval(function(){
			  let pCharacterTop = parseInt(window.getComputedStyle(pCharacter).getPropertyValue("top"));
				for (let i = 0; i < pEnemy.length; i++){ //This will be changed to use objects properly, in time
					var pEnemyLeft = parseInt(window.getComputedStyle(pEnemy[i],null).getPropertyValue("left"));
					if (pEnemyLeft<20 && pEnemyLeft>=0 && pCharacterTop>=190) {
						pEnemy[i].style.animation="none";
						pEnemy[i].style.display="none";
						alert("u lose")
					}
				}  
		  },10);

		//More COMPLICATED game code
		var myGamePiece;
		var myObstacles = [];
		var myScore;

		function startGame() {
			myGamePiece = new component(30, 30, "red", 10, 120);
			myGamePiece.gravity = 0.05;
			myScore = new component("30px", "Consolas", "black", 280, 40, "text");
			myGameArea.start();
		}

		var myGameArea = {
			canvas : document.createElement("canvas"),
			start : function() {
				this.canvas.width = 480;
				this.canvas.height = 270;
				this.context = this.canvas.getContext("2d");
				document.body.insertBefore(this.canvas, document.body.childNodes[0]);
				this.frameNo = 0;
				this.interval = setInterval(updateGameArea, 20);
				},
			clear : function() {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			}
		}

		function component(width, height, color, x, y, type) {
			this.type = type;
			this.score = 0;
			this.width = width;
			this.height = height;
			this.speedX = 0;
			this.speedY = 0;    
			this.x = x;
			this.y = y;
			this.gravity = 0;
			this.gravitySpeed = 0;
			this.update = function() {
				ctx = myGameArea.context;
				if (this.type == "text") {
					ctx.font = this.width + " " + this.height;
					ctx.fillStyle = color;
					ctx.fillText(this.text, this.x, this.y);
				} else {
					ctx.fillStyle = color;
					ctx.fillRect(this.x, this.y, this.width, this.height);
				}
			}
			this.newPos = function() {
				this.gravitySpeed += this.gravity;
				this.x += this.speedX;
				this.y += this.speedY + this.gravitySpeed;
				this.hitBottom();
			}
			this.hitBottom = function() {
				var rockbottom = myGameArea.canvas.height - this.height;
				if (this.y > rockbottom) {
					this.y = rockbottom;
					this.gravitySpeed = 0;
				}
			}
			this.crashWith = function(otherobj) {
				var myleft = this.x;
				var myright = this.x + (this.width);
				var mytop = this.y;
				var mybottom = this.y + (this.height);
				var otherleft = otherobj.x;
				var otherright = otherobj.x + (otherobj.width);
				var othertop = otherobj.y;
				var otherbottom = otherobj.y + (otherobj.height);
				var crash = true;
				if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
					crash = false;
				}
				return crash;
			}
		}

		function updateGameArea() {
			var x, height, gap, minHeight, maxHeight, minGap, maxGap;
			for (i = 0; i < myObstacles.length; i += 1) {
				if (myGamePiece.crashWith(myObstacles[i])) {
					return;
				} 
			}
			myGameArea.clear();
			myGameArea.frameNo += 1;
			if (myGameArea.frameNo == 1 || everyinterval(150)) {
				x = myGameArea.canvas.width;
				minHeight = 20;
				maxHeight = 200;
				height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
				minGap = 50;
				maxGap = 200;
				gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
				myObstacles.push(new component(10, height, "green", x, 0));
				myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
			}
			for (i = 0; i < myObstacles.length; i += 1) {
				myObstacles[i].x += -1;
				myObstacles[i].update();
			}
			myScore.text="SCORE: " + myGameArea.frameNo;
			myScore.update();
			myGamePiece.newPos();
			myGamePiece.update();
		}

		function everyinterval(n) {
			if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
			return false;
		}

		function accelerate(n) {
			myGamePiece.gravity = n;
		}