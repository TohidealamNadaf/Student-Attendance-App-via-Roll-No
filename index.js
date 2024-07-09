let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let absentEl =document.getElementById("absent-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
} 

function absent(){
    absentEl.textContent += count + " - "
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
}


function clearCount(){
    countEl.textContent = 0
    count = 0
}
