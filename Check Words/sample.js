let getEl = document.querySelector("body");
// getEl.innerHTML = `<a href="google.com">This is it!!!</a>`;





const names = ["Darko Awuah Jackson", "Jackson Micheal Kofi", "Abigail Antwi"];




// const name = "Darko Awuah Jackson";

// function nameIdentifier(input) {
//     if (input === undefined || typeof(input) === "number"){
//         console.log("Please enter a valid name!!!");
//     } else if (input !== undefined && typeof(input) !== "number") {
//         let inputOrder = input.split(" ").sort();
//         let nameOrder = name.split(" ").sort();
//         // console.log(inputOrder);
//         // console.log(nameOrder);
//         if (inputOrder[0] === nameOrder[0] && inputOrder[1] === nameOrder[1] && inputOrder[2] === nameOrder[2]){
//             return true;
//         } else return false;
//     } else return "is invalid!!!";
// }

// console.log(nameIdentifier("Jackson Darko Awuah"));










// function compareInput(input01, input02) {
//     if (input01.length === input02.length){
//         let arrInput01 = Array.from(input01);
//         let arrInput02 = Array.from(input02);
//         // console.log(arrInput01);
//         // console.log(arrInput02);
//         for (let i = 0; i <= arrInput01.length; i++) {
//             if (arrInput01[i] === arrInput02[i]){
//                 return true;
//             } else return false;
//         }
//     } else return "Already not the same."
// }



/* ALGORITHM TO CHECK IF TWO WORDS MATCH */
function compareInput(input01, input02) {
    if (input01.length === input02.length){
        if (typeof(input01) === "number" && typeof(input02) === "number"){
            let covStr01 = input01.toString();
            let covStr02 = input02.toString();
            let arrInput01 = Array.from(covStr01);
            let arrInput02 = Array.from(covStr02);
            let arrSort01 = arrInput01.sort();
            let arrSort02 = arrInput02.sort();
            let count = 0;
            for (let i = 0; i < arrSort01.length; i++) {
                if (arrSort01[i] === arrSort02[i]){
                    count ++;   
                }    
            }
            if (count === arrSort01.length){
                return true;
            } else return false;
        } else if (typeof(input01) !== "number" && typeof(input02) !== "number") {
            let lower01 = input01.toLowerCase();
            let lower02 = input02.toLowerCase();
            let arrInput01 = Array.from(lower01);
            let arrInput02 = Array.from(lower02);
            let arrSort01 = arrInput01.sort();
            let arrSort02 = arrInput02.sort();
            let count = 0;
            for (let i = 0; i < arrSort01.length; i++) {
                if (arrSort01[i] === arrSort02[i]){
                    count ++;   
                }    
            }
            if (count === arrSort01.length){
                return true;
            } else return false;
        } else return false;
        
        
    } else return false
}

console.log(compareInput("Darko Jackson", "Jackson Darko"));















