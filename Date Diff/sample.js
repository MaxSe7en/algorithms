let getEl = document.querySelector("body");
// getEl.innerHTML = `<a href="google.com">This is it!!!</a>`

let getDate = new Date("2017-03-07");

let currentDate = new Date();
getEl.innerText = calcDate("2021-08-02", "2022-08-07") 




function calcDate(date01, date02) {
    let getDate01 = new Date(date01);
    let getDate02 = new Date(date02);
    //convert to seconds;
    if (getDate01 > getDate02) {
        let days = Math.floor((getDate01 - getDate02)/1000/3600/24);
        return `${days} days`;
    } else if (getDate01 < getDate02){
        let days = Math.floor((getDate01 - getDate02)/1000/3600/24);
        return `In  ${Math.abs(days)} days time.`
    } else return "invalid imput"  
}

console.log(calcDate("2021", "2022"));