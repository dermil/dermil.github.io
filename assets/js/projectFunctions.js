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
		