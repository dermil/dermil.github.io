/* Project functions */

		//Pig latin translator
		function translatePigLatin(str) {
			let vowel = /^[aeiou]/g;
			let repl = document.getElementById('pigLat').value;
			if (str ==''){
				str = document.getElementById('pigEng').value;
			}

			if (vowel.test(str)){
				let newStr = str.replace(/(^[a-z]+||[aeiou]+)/,"$1way") //Replace vowels
				return document.getElementById("pigLat").value = newStr;
			} else {
				let newStr = str.replace(/(^[^aeiou]+)([a-z]+||[aeiou]+)/,"$2$1ay") //Replace consonants
				return document.getElementById("pigLat").value = newStr;
			}  
		}
		