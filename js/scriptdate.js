let modDate = new Date(document.lastModified)
let curDate = new Date()
let year = curDate.getFullYear()
let modYear = modDate.getFullYear()
let modMonth = modDate.getMonth()
let modDay = modDate.getDate()
let modHrs = modDate.getHours()
let modMin = modDate.getMinutes()
let modSec = modDate.getSeconds()


document.getElementById("dateMod").innerHTML = `Last Updated: ${modMonth+1}/${modDay}/${modYear} ${modHrs}:${modMin}:${modSec}`;
document.getElementById("year").innerText = year;