const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?",
"/"];
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let done = true

function generatePassword() {
    optionOne.textContent = ""
    optionTwo.textContent = ""
    if(done === true) {

        for (let i = 0; i < 16; i ++ ) {
 
            let randomPwdOne = Math.round( Math.random() * characters.length )
            optionOne.textContent += ( characters[randomPwdOne] )

           let randomPwdTwo = Math.round( Math.random() * characters.length )
           optionTwo.textContent += ( characters[randomPwdTwo] )

        }
    }
}    